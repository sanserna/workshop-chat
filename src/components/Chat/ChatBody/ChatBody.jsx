import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Store } from 'Store';
import styles from './ChatBody.module.scss';
import Message from './Message';

const GET_CHATS = gql`
  query ChatsQuery {
    chats {
      id
      from
      fromName
      message
    }
  }
`;

function ChatBody() {
  const { state } = useContext(Store);
  const chatBodyClassNames = [styles['chat-body'], 'elevation-box-inset-right'];
  const { data, loading } = useQuery(GET_CHATS);
  const chatList = data.chats;

  return (
    <section className={chatBodyClassNames.join(' ')}>
      {loading
        ? 'Cargando mensajes...'
        : chatList.map(chat => (
            <Message
              key={chat.id}
              fromName={chat.fromName}
              message={chat.message}
              isOwn={chat.from === state.user.id}
            />
          ))}
    </section>
  );
}

export default ChatBody;
