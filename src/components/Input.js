/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Input.css';

const Input = ({ changed, submited, blured, ...restProps }) => (
  <input
    className={classes.Input}
    onChange={changed}
    onKeyPress={submited}
    onBlur={blured}
    {...restProps}
  />
);

export default Input;
