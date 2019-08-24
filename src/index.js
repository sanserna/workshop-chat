/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloProvider } from '@apollo/react-hooks';

import './styles/global.scss';
import App from './App';
import StoreProvider from './Store';

// Endpoint donde se encuentra corriendo el servidor de GraphQl
const SERVER_ENDPOINT = 'localhost:4000';

// Nos permite crear un link para obtener resultados de un servidor de GraphQl
// por medio de una conexion http
// https://www.apollographql.com/docs/link/links/http/
const httpLink = new HttpLink({ uri: `http://${SERVER_ENDPOINT}/graphql` });

// Nos permite crear un link por el cual nos podremos suscribir a las
// actualizaciones del servidor de GraphQl por medio del protocolo
// ws (WebSockets)
// https://www.apollographql.com/docs/link/links/ws/
const wsLink = new WebSocketLink({
  uri: `ws://${SERVER_ENDPOINT}/subscriptions`,
  options: {
    reconnect: true
  }
});

// La capacidad de dividir enlaces nos permite enviar datos a cada enlace
// dependiendo del tipo de operación que se recibe
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

// Cliente con el cual podremos conectarnos al servidor de GraphQl
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
