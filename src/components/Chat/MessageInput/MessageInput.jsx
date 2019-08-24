import React from 'react';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import styles from './MessageInput.module.scss';

function MessageInput() {
  const [message, setMessage] = React.useState('');

  return (
    <div className={styles['message-input']}>
      <Input
        className={styles['text-input']}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button onClick={() => {}}>Enviar</Button>
    </div>
  );
}

export default MessageInput;
