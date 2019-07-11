/* eslint-disable prefer-destructuring */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import { readFromWebSQL } from './localStorage/readFromWebSQL';
import { writeToWebSQL } from './localStorage/writeToWebSQL';

import * as actionTypes from './actions';

export const addPro = item => ({
  type: actionTypes.ADD_PRO,
  item,
});

export const editPro = (event, index) => ({
  type: actionTypes.EDIT_PRO,
  event,
  index,
});

export const dragProStart = (event, index) => ({
  type: actionTypes.DRAG_PRO_START,
  event,
  index,
});

export const dropPro = () => ({
  type: actionTypes.DROP_PRO,
});

export const addCon = item => ({
  type: actionTypes.ADD_CON,
  item,
});

export const editCon = (event, index) => ({
  type: actionTypes.EDIT_CON,
  event,
  index,
});

export const dragConStart = (event, index) => ({
  type: actionTypes.DRAG_CON_START,
  event,
  index,
});

export const dropCon = () => ({
  type: actionTypes.DROP_CON,
});

export const initLists = () => dispatch => {
  readFromWebSQL(dispatch);
};
export const store = () => (dispatch, getState) => {
  writeToWebSQL(dispatch, getState);
};
