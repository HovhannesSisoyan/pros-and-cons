import React, { useCallback } from 'react';
import  { connect } from 'react-redux';

import * as actionTypes from '../store/actions';
import List from './List';

const Cons = ({ dispatch, items }) => {

    const onConAdded = useCallback(item =>
        dispatch({ type: actionTypes.ADD_CON, item }),
        [dispatch]
    );
    
    const onConEdited = useCallback((event, index) =>
        dispatch({type: actionTypes.EDIT_CON, event, index}),
        [dispatch]
    );

    const onDragStart = useCallback((event, index) => dispatch({type: actionTypes.DRAG_CON_START, event, index}), [dispatch]);
    
    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = useCallback(() => 
            dispatch({type: actionTypes.DROP_CON}),
            [dispatch]
    );

    return (
        <div>
            <h2>CONS</h2>
            <List
                items={items}
                onItemAdded={onConAdded}
                onItemEdited={onConEdited}
                onDragStart={onDragStart}
                onDragOver={(event) => onDragOver(event)}
                droped={onDrop}
            />
        </div>
        
    );
};

const mapStateToProps = state => {
    return {
        items: state.consList
    };
};

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Cons);