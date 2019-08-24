import React from 'react';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import styles from './UserNameInput.module.scss';

function UserNameInput() {
  const [userName, setUserName] = React.useState('');

  return (
    <div className={styles['user-name-input']}>
      <strong>Nombre:</strong>
      <Input
        className={styles['text-input']}
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <Button disabled={!userName} onClick={() => {}}>
        Go
      </Button>
    </div>
  );
}

export default UserNameInput;
