import React from 'react';

import Chat from 'components/Chat';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['app-container']}>
      <Chat />
    </div>
  );
}

export default App;
