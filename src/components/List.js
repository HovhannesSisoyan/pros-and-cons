import React, { useState, useCallback } from 'react';
import Input from './Input';


const List = (props) => {

    let id = 100;
    
    const [input, setInput] = useState('');
    const [emptyInput, setEmptyInput] = useState(false);

    const addItem = useCallback(() => {
        if ( input ) {
            props.onItemAdded(input);
            setInput('');
            setEmptyInput(false);
        };
    },[input, props]);

    const submit = useCallback((event) => {
        if ( event.key === "Enter" || event.keyCode === 13 || event.which === 13 ) {
            addItem();
        };
    },[addItem]);

    const blured = useCallback(() => 
        addItem(),
        [addItem]);
    
    const change = useCallback((event) => {
        if(event.target.value !== ''){
            !emptyInput && setEmptyInput(true);
        } else {
            emptyInput && setEmptyInput(false);
        }; 
        setInput(event.target.value);
    },[emptyInput]);

    
    const list = (
        <ol >
            {props.items.map((item, index) => (
                <li 
                    className="input class"
                    key={++id}
                    draggable='true'
                    onDragStart={(event) => props.onDragStart(event, index)}
                    //onDragEnd={(event) => props.onDragEnd(event, index)}
                    > 
                        <Input
                            value={item}
                            changed={(event) => props.onItemEdited(event, index)}
                        />
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
        
    );
};

export default List

