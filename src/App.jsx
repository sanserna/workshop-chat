import React from 'react';

import Chat from 'components/Chat';
import UserNameInput from 'components/UserNameInput';
import { Store } from './Store';
import styles from './App.module.scss';

function App() {
  const { state } = React.useContext(Store);
  const userExists = !!Object.keys(state.user).length;

  return (
    <div className={styles['app-container']}>
      {userExists ? <Chat /> : <UserNameInput />}
    </div>
  );
}

export default App;
