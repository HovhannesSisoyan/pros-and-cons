/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';
import List from './List';

const Pros = ({ name, dispatch, items }) => {
  // eslint-disable-next-line arrow-body-style
  /* useEffect(() => {
    dispatch({ type: actionTypes.initializeLists(items) });
  }, [dispatch, name, items]);
  */
  const onItemAdded = useCallback(
    item => {
      let tmp;
      name === 'pros'
        ? (tmp = actionTypes.ADD_PRO)
        : (tmp = actionTypes.ADD_CON);
      return dispatch({ type: tmp, item });
    },
    [dispatch, name]
  );

  const onItemEdited = useCallback(
    (event, index) => {
      let tmp;
      name === 'pros'
        ? (tmp = actionTypes.EDIT_PRO)
        : (tmp = actionTypes.EDIT_CON);
      return dispatch({ type: tmp, event, index });
    },
    [dispatch, name]
  );

  const onDragStart = useCallback(
    (event, index) => {
      let tmp;
      name === 'pros'
        ? (tmp = actionTypes.DRAG_PRO_START)
        : (tmp = actionTypes.DRAG_CON_START);
      return dispatch({ type: tmp, event, index });
    },
    [dispatch, name]
  );

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = useCallback(() => {
    let tmp;
    name === 'pros'
      ? (tmp = actionTypes.DROP_PRO)
      : (tmp = actionTypes.DROP_CON);
    return dispatch({ type: tmp });
  }, [dispatch, name]);

  return (
    <div>
      <h2>{name}</h2>
      <List
        items={items}
        onItemAdded={onItemAdded}
        onItemEdited={onItemEdited}
        onDragStart={onDragStart}
        onDragOver={event => onDragOver(event)}
        droped={onDrop}
      />
    </div>
  );
};
const mapStateToProps = (state, props) => {
  let items;
  props.name === 'pros' ? (items = state.prosList) : (items = state.consList);
  return {
    items,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pros);

// DRY -
