import React from 'react';
import  { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import List from './List';

const Pros = (props) => {

    
    return (
        <div>
            <h2>PROS</h2>
            <List items={props.items}
                  onItemAdded={props.onProAdded}
                  onItemEdited={props.onProEdited}/>
        </div>
        
    )
}
const mapStateToProps = state => {
    return {
        items: state.prosList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onProAdded: (item) => dispatch({type: actionTypes.ADD_PRO, item: item}),
        onProEdited: (event, index) => dispatch({type: actionTypes.EDIT_PRO, event: event, index: index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pros)