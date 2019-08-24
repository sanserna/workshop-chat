import React from 'react';
import PropTypes from 'prop-types';

import styles from './Message.module.scss';

function Message({ fromName, message, isOwn }) {
  const messageClassNames = [styles.message, 'elevation-z1'];

  if (isOwn) {
    messageClassNames.push(styles['message--own']);
  }

  return (
    <div className={messageClassNames.join(' ')}>
      <span className={styles['message__user-name']}>{fromName}</span>
      <span className={styles.message_text}>{message}</span>
    </div>
  );
}

Message.propTypes = {
  fromName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOwn: PropTypes.bool
};

Message.defaultProps = {
  isOwn: false
};

export default Message;
