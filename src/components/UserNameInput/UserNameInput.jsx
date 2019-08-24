import React from 'react';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import { Store } from 'Store';
import styles from './UserNameInput.module.scss';

const ID = () => {
  return `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
};

function UserNameInput() {
  const { dispatch } = React.useContext(Store);
  const [userName, setUserName] = React.useState('');

  return (
    <div className={styles['user-name-input']}>
      <strong>Nombre:</strong>
      <Input
        className={styles['text-input']}
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <Button
        disabled={!userName}
        onClick={() => {
          dispatch({
            type: 'SET_USER',
            payload: { id: ID(), name: userName }
          });
        }}
      >
        Go
      </Button>
    </div>
  );
}

export default UserNameInput;
