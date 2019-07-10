/* eslint-disable no-case-declarations */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
import * as actionTypes from './actions';
import initialState from './initialState';
// import { writeToDb } from './localStorage/writeTolocalStorage';

const reducer = (state = initialState, action) => {
  let tempArray = [];
  let tempArray2 = [];
  let tempString = '';
  let index;

  switch (action.type) {
    case actionTypes.INIT_PROS:
      return {
        ...state,
        prosList: [...action.list],
      };
    case actionTypes.INIT_CONS:
      return {
        ...state,
        consList: [...action.list],
      };
    case actionTypes.ADD_PRO:
      tempArray = [...state.prosList].concat(action.item);
      // writeToDb(tempArray, state.consList);
      return {
        ...state,
        prosList: tempArray,
      };

    case actionTypes.EDIT_PRO:
      tempArray = [...state.prosList];
      tempString = action.event.target.value;
      index = action.index;
      tempArray[index] = tempString;
      if (!tempString) {
        tempArray.splice(index, 1);
      }
      // writeToDb(tempArray, state.consList);
      return {
        ...state,
        prosList: [...tempArray],
      };

    case actionTypes.DRAG_PRO_START:
      state.dragingIndex = action.index;
      state.dragingFrom = 'pro';
      tempString = state.prosList[state.dragingIndex];
      return {
        ...state,
        dragingItem: tempString,
      };

    case actionTypes.DROP_PRO:
      tempArray = [...state.prosList];
      tempArray2 = [...state.consList];
      if (state.dragingFrom === 'pro') {
        tempArray.splice(state.dragingIndex, 1);
      }
      if (state.dragingFrom === 'con') {
        tempArray2.splice(state.dragingIndex, 1);
      }
      // writeToDb(tempArray.concat(state.dragingItem), tempArray2);
      return {
        ...state,
        prosList: [...tempArray].concat(state.dragingItem),
        consList: [...tempArray2],
        dragingItem: '',
      };

    case actionTypes.ADD_CON:
      tempArray = [...state.consList].concat(action.item);
      return {
        ...state,
        consList: [...tempArray],
      };

    case actionTypes.EDIT_CON:
      tempArray = [...state.consList];
      tempString = action.event.target.value;
      index = action.index;
      tempArray[index] = tempString;
      if (!tempString) {
        tempArray.splice(index, 1);
      }
      return {
        ...state,
        consList: [...tempArray],
      };

    case actionTypes.DRAG_CON_START:
      state.dragingIndex = action.index;
      state.dragingFrom = 'con';
      tempString = state.consList[state.dragingIndex];
      return {
        ...state,
        dragingItem: tempString,
      };

    case actionTypes.DROP_CON:
      tempArray = [...state.prosList];
      tempArray2 = [...state.consList];
      if (state.dragingFrom === 'pro') {
        tempArray.splice(state.dragingIndex, 1);
      }
      if (state.dragingFrom === 'con') {
        tempArray2.splice(state.dragingIndex, 1);
      }
      return {
        ...state,
        prosList: [...tempArray],
        consList: [...tempArray2].concat(state.dragingItem),
        dragingItem: '',
      };
    case actionTypes.STORE:
      return state;
    // break;
    default:
      return state;
  }
};

export default reducer;
