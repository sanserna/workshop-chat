import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Store } from 'Store';
import Input from 'components/base/Input';
import Button from 'components/base/Button';
import styles from './MessageInput.module.scss';

const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessage($from: ID!, $fromName: String!, $message: String!) {
    sendMessage(from: $from, fromName: $fromName, message: $message) {
      id
      from
      fromName
      message
    }
  }
`;

function MessageInput() {
  const { state } = useContext(Store);
  const [sendMessage] = useMutation(SEND_MESSAGE_MUTATION);
  const [message, setMessage] = React.useState('');

  return (
    <div className={styles['message-input']}>
      <Input
        className={styles['text-input']}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        onClick={() => {
          if (!message) return;

          sendMessage({
            variables: {
              message,
              from: state.user.id,
              fromName: state.user.name
            }
          }).then(() => {
            setMessage('');
          });
        }}
      >
        Enviar
      </Button>
    </div>
  );
}

export default MessageInput;
