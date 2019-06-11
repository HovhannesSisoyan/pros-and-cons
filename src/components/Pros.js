import React from 'react';
import  { connect } from 'react-redux';
import { useCallback } from 'react';

import * as actionTypes from '../store/actions';
import List from './List';

const Pros = ({ dispatch, items }) => {

    const onProAdded = useCallback(item => 
        dispatch({ type: actionTypes.ADD_PRO, item }),
        [dispatch]
    );
    
    const onProEdited = useCallback((event, index) => 
        dispatch({type: actionTypes.EDIT_PRO, event, index}),
        [dispatch]
    );

    const onDragStart = useCallback((event, index) => 
            dispatch({type: actionTypes.DRAG_PRO_START, event, index}),
            [dispatch]
    );

    const onDragOver = (event) => {
        event.preventDefault();      
    };

    const onDrop = useCallback(() => 
            dispatch({type: actionTypes.DROP_PRO}),
            [dispatch]
    );
    
    
    return (
        <div>
            <h2>PROS</h2>
            <List 
                items={items}
                onItemAdded={onProAdded}
                onItemEdited={onProEdited}
                onDragStart={onDragStart}
                onDragOver={(event) => onDragOver(event)}
                droped={onDrop}
            />
        </div>
        
    );
};
const mapStateToProps = state => {
    return {
        items: state.prosList
    };
};

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Pros)