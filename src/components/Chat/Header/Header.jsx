import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>Hola Santiago</h2>
      <img src="assets/zemoga-logo.svg" alt="Zemoga" />
    </header>
  );
}

export default Header;
