import React, {useState} from 'react';
import Input from './Input';
import classes from './Cons.css'


const Cons = (props) => {

    let id = 100;

    const [consList, addCon] = useState([]);
    const [input, setInput] = useState('');
    const [emptyInput, setEmptyInput] = useState(false);

    const submit = (event) => {
        if(event.target.value === '') return;
        if (event.key === "Enter") {
        addCon([
            ...consList,
            input
        ]);
        setInput('');
        setEmptyInput(false);
        }
    }

    const edit = (event, id) => {
        consList[id] = event.target.value;
        if(event.target.value === '') {
            consList.splice(id,1);
        }
        addCon([
            ...consList        
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
        addCon([
            ...consList,
            input
        ]);
        setInput('');
        setEmptyInput(false);
    }

    return (
        <div className={classes.Cons} >
            <h2>pros</h2>
            <hr/>
                <ol >
                    {consList.map((con, index) => (
                        <li key={++id}> <Input
                                            value={con}
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


export default Cons