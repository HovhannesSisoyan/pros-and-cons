import React from 'react';

const Input = (props) => {
    return (
        <input    
           value={props.value}
           onChange={props.changed}
           onKeyPress={props.submited}/>
    );
};


export default Input;