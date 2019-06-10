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

    const onDragEnd = useCallback((event, index) =>
        dispatch({type: actionTypes.DRAG_PRO_END, event, index}),
        [dispatch]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        console.log(event.target.className)
        
    });

    const onDrop = useCallback((event) => {
        event.preventDefault();
        console.log("onDrop pros")
    });
    
    
    return (
        <div>
            <h2>PROS</h2>
            <List 
                className="pros"
                items={items}
                onItemAdded={onProAdded}
                onItemEdited={onProEdited}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragOver={onDragOver}
                onDrop={onDrop}
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