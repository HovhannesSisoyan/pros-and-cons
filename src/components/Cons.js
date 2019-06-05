import React, {useState} from 'react';
import Input from './Input';




const Cons = (props) => {

    let id = 0; 

    const [conList, addCon] = useState([]);
    const [input, setInput] = useState('');

    const submit = (event) => {
        if (event.key === "Enter") {
        addCon([
            ...conList,
            event.target.value
        ]);
        setInput('');
        console.log("sumbited");
        }
    }

    const change = (event) => {
        setInput(event.target.value);
    }

    return (
        <div>
            <h2>cons</h2>
        <ol>
            {conList.map((con) => <li key={++id}>{con}</li>)}
            <li>
            <Input
                changed={change}
                submited={submit}
                value={input}/>
            </li>
        </ol>
        </div>
        
    )
}

export default Cons