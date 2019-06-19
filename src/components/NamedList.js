/* eslint-disable spaced-comment */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actionCreators';
import List from './List';

const Pros = ({ name, dispatch, items }) => {
  // eslint-disable-next-line arrow-body-style
  /*useEffect(() => dispatch(actionCreators.initLists()), [
    dispatch,
    name,
    items,
  ]); */
  const onItemAdded = useCallback(
    item => {
      let tmp;
      name === 'pros'
        ? (tmp = actionCreators.addPro)
        : (tmp = actionCreators.addCon);
      return dispatch(tmp(item));
    },
    [dispatch, name]
  );

  const onItemEdited = useCallback(
    (event, index) => {
      let tmp;
      name === 'pros'
        ? (tmp = actionCreators.editPro)
        : (tmp = actionCreators.editCon);
      return dispatch(tmp(event, index));
    },
    [dispatch, name]
  );

  const onDragStart = useCallback(
    (event, index) => {
      let tmp;
      name === 'pros'
        ? (tmp = actionCreators.dragProStart)
        : (tmp = actionCreators.dragConStart);
      return dispatch(tmp(event, index));
    },
    [dispatch, name]
  );

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = useCallback(() => {
    let tmp;
    name === 'pros'
      ? (tmp = actionCreators.dropPro)
      : (tmp = actionCreators.dropCon);
    return dispatch(tmp());
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
