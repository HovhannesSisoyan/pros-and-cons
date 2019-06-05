import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    return (
        <input
           className={classes.Input}  
           value={props.value}
           onChange={props.changed}
           onKeyPress={props.submited}
           onBlur={props.blur}/>
    );
};


export default Input;