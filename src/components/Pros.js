import React, {useState} from 'react';
import Input from './Input';
import classes from './Pros.css';

const Pros = (props) => {

    let id = 100;

    const [prosList, addPro] = useState([]);
    const [input, setInput] = useState('');
    const [emptyInput, setEmptyInput] = useState(false);

    const submit = (event) => {
        if(event.target.value === '') return;
        if (event.key === "Enter") {
        addPro([
            ...prosList,
            input
        ]);
        setInput('');
        setEmptyInput(false);
        }
    }

    const edit = (event, id) => {
        prosList[id] = event.target.value;
        if(event.target.value === '') {
            prosList.splice(id,1);
        }
        addPro([
            ...prosList        
        ]);
    }
    
    const change = (event) => {
        if(event.target.value !== ''){
            setEmptyInput(true);
        } else setEmptyInput(false); 
        setInput(event.target.value);
    }
    
    const blured = (event) => {
        if(event.target.value === '') return;
        addPro([
            ...prosList,
            input
        ]);
        setInput('');
        setEmptyInput(false);
    }

    return (
        <div className={classes.Pros} >
            <h2>pros</h2>
            <hr/>
                <ol >
                    {prosList.map((pro, index) => (
                        <li key={++id}> <Input
                                            value={pro}
                                            changed={(event) => edit(event, index)} />
                        </li>))}
                    <li>
                        <Input 
                            submited={submit}
                            changed={(event) => change(event)}
                            value={input}
                            blur={blured}
                            />
                    </li>
                    {emptyInput ? <li><Input /> </li> : null}
                </ol>
        </div>
        
    )
}

export default Pros