/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actionCreators';
import List from './List';

const NamedList = ({ name, dispatch, items }) => {
  const save = useCallback(() => dispatch(actionCreators.store()), [dispatch]);

  const onItemAdded = useCallback(
    item => {
      let tmp;
      name === 'pros'
        ? (tmp = actionCreators.addPro)
        : (tmp = actionCreators.addCon);
      dispatch(tmp(item));
      save();
    },
    [dispatch, name, save]
  );

  const onItemRemoved = useCallback(
    index => {
      let tmp;
      name === 'pros'
        ? (tmp = actionCreators.removePro)
        : (tmp = actionCreators.removeCon);
      dispatch(tmp(index));
      save();
    },
    [dispatch, name, save]
  );

  const onItemEdited = useCallback(
    (event, index) => {
      event.persist();
      if (!event.target.value) {
        onItemRemoved(index);
      }
      let tmp;
      name === 'pros'
        ? (tmp = actionCreators.editPro)
        : (tmp = actionCreators.editCon);
      dispatch(tmp(event, index));
      save();
    },
    [dispatch, name, save, onItemRemoved]
  );

  const onDragStart = useCallback(
    (event, index) => {
      let tmp;
      name === 'pros'
        ? (tmp = actionCreators.dragProStart)
        : (tmp = actionCreators.dragConStart);
      dispatch(tmp(event, index));
      save();
    },
    [dispatch, name, save]
  );

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = useCallback(() => {
    let tmp;
    name === 'pros'
      ? (tmp = actionCreators.dropPro)
      : (tmp = actionCreators.dropCon);
    dispatch(tmp());
    save();
  }, [dispatch, name, save]);

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
)(NamedList);
