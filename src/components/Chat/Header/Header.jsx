import React from 'react';

import { Store } from 'Store';
import styles from './Header.module.scss';

function Header() {
  const { state } = React.useContext(Store);

  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>Hola {state.user.name}</h2>
      <img src="assets/zemoga-logo.svg" alt="Zemoga" />
    </header>
  );
}

export default Header;
