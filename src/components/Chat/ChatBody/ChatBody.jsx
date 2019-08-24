import React from 'react';

import styles from './ChatBody.module.scss';
import Message from './Message';

function ChatBody() {
  const chatBodyClassNames = [styles['chat-body'], 'elevation-box-inset-right'];

  return (
    <section className={chatBodyClassNames.join(' ')}>
      <Message fromName="Santiago" message="Hola" isOwn />
    </section>
  );
}

export default ChatBody;
