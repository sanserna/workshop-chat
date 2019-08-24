import React from 'react';

import styles from './Chat.module.scss';
import Header from './Header';
import ChatBody from './ChatBody';
import MessageInput from './MessageInput';

function Chat() {
  return (
    <div className={styles.chat}>
      <Header />
      <ChatBody />
      <MessageInput />
    </div>
  );
}

export default Chat;
