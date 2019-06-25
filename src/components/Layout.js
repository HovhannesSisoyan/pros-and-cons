/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NamedList from './NamedList';
import classes from './Layout.css';

import * as actionCreators from '../store/actionCreators';

// eslint-disable-next-line react/prop-types
const Layout = ({ dispatch }) => {
  /* useEffect(() => {
    dispatch(actionCreators.initializeLists(), []);
  }); */
  dispatch(actionCreators.initializeLists());
  return (
    <div className={classes.Layout}>
      <h2 className={classes.Header}>Should I eat at McDonalds?</h2>
      <div className={classes.ProsCons}>
        <NamedList name="pros" />
        <NamedList name="cons" />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  null,
  mapDispatchToProps
)(Layout);
