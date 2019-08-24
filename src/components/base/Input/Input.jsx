import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

function Input({
  type,
  placeholder,
  disabled,
  value,
  className,
  style,
  onChange
}) {
  const inputClassNames = ['form-control', styles.input, className];

  return (
    <input
      style={style}
      className={inputClassNames.join(' ')}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url'
  ]),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  className: '',
  style: {}
};

export default Input;
