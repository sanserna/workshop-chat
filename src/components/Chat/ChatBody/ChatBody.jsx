import React, { useContext, useEffect, useRef } from 'react';
import { useQuery, useSubscription } from '@apollo/react-hooks';
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
const CHATS_SUBSCRIPTION = gql`
  subscription OnNewMessage {
    messageSent {
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
  const { data: subscriptionData } = useSubscription(CHATS_SUBSCRIPTION);
  const chatList = data.chats;
  const elementRef = useRef(null);

  if (subscriptionData) {
    chatList.push(subscriptionData.messageSent);
  }

  useEffect(() => {
    elementRef.current.scrollTop = elementRef.current.scrollHeight;
  }, [data, subscriptionData]);

  return (
    <section className={chatBodyClassNames.join(' ')} ref={elementRef}>
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
