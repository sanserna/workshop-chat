import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button({ children, disabled, className, style, onClick }) {
  const buttonClassNames = [styles.button, className];

  return (
    <button
      type="button"
      disabled={disabled}
      className={buttonClassNames.join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  disabled: false,
  className: '',
  style: {}
};

export default Button;
