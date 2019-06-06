import React, { useCallback } from 'react';
import  { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import List from './List';

const Cons = ({ dispatch, items }) => {

    const onConAdded = useCallback(item =>
        dispatch({ type: actionTypes.ADD_CON, item }),
        [actionTypes, dispatch]
    );
    const onConEdited = useCallback((event, index) =>
        dispatch({type: actionTypes.EDIT_CON, event, index}),
        [actionTypes, dispatch]
    );

    return (
        <div>
            <h2>CONS</h2>
            <List
                items={items}
                onItemAdded={onConAdded}
                onItemEdited={onConEdited}
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
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cons);