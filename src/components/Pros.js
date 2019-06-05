import React, {useState} from 'react';
import Input from './Input';

const Pros = (props) => {

    let id = 0;

    const [prosList, addPro] = useState([]);
    const [input, setInput] = useState('');

    const submit = (event) => {
        if (event.key === "Enter") {
        addPro([
            ...prosList,
            input
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
            <h2>pros</h2>
        <ol>
            {prosList.map((pro) => <li key={++id}>{pro}</li>)}
            <li>
                <Input 
                    submited={submit}
                    changed={change}
                    value={input}/>
            </li>
        </ol>
        
        </div>
        
    )
}

export default Pros