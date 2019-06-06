import React, { useState, useCallback } from 'react';
import Input from './Input';


const List = (props) => {

    let id = 100;
    
    const [input, setInput] = useState('');
    const [emptyInput, setEmptyInput] = useState(false);

    // useCallback

    const submit = (event) => {
        if ( event.key === "Enter" || event.keyCode === 13 || event.which === 13 ) {
            if (input) {
                props.onItemAdded(input);
                setInput('');
                setEmptyInput(false);
            };
        };
    };

    const blured = (event) => {
        if(input !== ''){
            props.onItemAdded(input);
            setInput('');
            setEmptyInput(false);
        };
    };
    
    const change = (event) => {
        if(event.target.value !== ''){
            !emptyInput && setEmptyInput(true);
        } else {
            emptyInput && setEmptyInput(false);
        }; 
        setInput(event.target.value);
    }
    
    const list = (
        <ol >
            {props.items.map((item, index) => (
                <li key={++id}> <Input
                                    value={item}
                                    changed={(event) => props.onItemEdited(event, index)} />
                </li>))}
            <li>
                <Input 
                    submited={submit}
                    changed={change}
                    value={input}
                    blured={blured}
                />
            </li>
            {emptyInput ? (<li>
                            <Input 
                                submited={submit}
                                changed={change}
                                value=''
                            />
            </li>) : null}
        </ol>
    );

    return (
        <div >
            <hr/>
            {list}  
        </div>
        
    )
}

export default List

