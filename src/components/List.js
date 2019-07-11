/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import Input from './Input';

const List = props => {
  let id = 100;

  const [input, setInput] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);

  const addItem = useCallback(() => {
    if (input) {
      props.onItemAdded(input);
      setInput('');
      setEmptyInput(false);
    }
  }, [input, props]);

  const submit = useCallback(
    event => {
      if (event.key === 'Enter' || event.keyCode === 13 || event.which === 13) {
        addItem();
      }
    },
    [addItem]
  );

  const blured = useCallback(addItem, [addItem]);

  const change = useCallback(
    event => {
      if (event.target.value !== '') {
        !emptyInput && setEmptyInput(true);
      } else {
        emptyInput && setEmptyInput(false);
      }
      setInput(event.target.value);
    },
    [emptyInput]
  );

  return (
    <div>
      <hr />
      <ol>
        {props.items.map((item, index) => (
          <li
            key={++id}
            draggable="true"
            onDragStart={event => props.onDragStart(event, index)}
            onDrop={props.droped}
            onDragOver={props.onDragOver}
          >
            <Input
              value={item}
              changed={event => props.onItemEdited(event, index)}
            />
          </li>
        ))}
        <li>
          <Input
            onDrop={props.droped}
            onDragOver={props.onDragOver}
            submited={submit}
            // eslint-disable-next-line no-restricted-globals
            changed={() => change(event)}
            value={input}
            blured={blured}
          />
        </li>
        {emptyInput && (
          <li>
            <Input submited={submit} changed={change} value="" />
          </li>
        )}
      </ol>
    </div>
  );
};

export default List;
