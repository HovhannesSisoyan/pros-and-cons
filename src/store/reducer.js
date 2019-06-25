/* eslint-disable no-case-declarations */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
import * as actionTypes from './actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  let tempArray = [];
  let tempArray2 = [];
  let tempString = '';
  let index;

  switch (action.type) {
    case actionTypes.INIT_LISTS:
      console.log('actiontypes.init.lists');
      console.log(action);
      // eslint-disable-next-line no-case-declarations
      // const prepareDatabase = () =>
      //  openDatabase('proscons', '1.0', 'proscons', 2 * 1024 * 1024);
      const db = openDatabase('proscons', '1.0', 'proscons', 2 * 1024 * 1024);
      db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS PROS (item)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS CONS (item)');
        // tx.executeSql('INSERT INTO PROS (item) VALUES ("burgers are testy")');
        // console.log('1 row added');
      });
      // let pList = [];
      // eslint-disable-next-line no-use-before-define
      // const db = prepareDatabase();
      db.transaction(function(tx) {
        tx.executeSql(
          'SELECT * FROM PROS',
          [],
          function(tx, results) {
            const len = results.rows.length;
            let i;

            for (i = 0; i < len; i++) {
              console.log('for loop');
              state.prosList = state.prosList.concat(results.rows.item(i).item);
            }
            console.log(`stste.propsList = ${state.prosList}`);
            // console.log(pList);
            console.log({
              ...state,
              // prosList: [...pList],
            });
            return {
              ...state,
              // yprosList: [...pList],
            };
          },
          null
        );
      });
      // return pList;
      /* const collectCons = db => {
        let cList = [];
        db.transaction(function(tx) {
          tx.executeSql(
            'SELECT * FROM CONS',
            [],
            function(tx, results) {
              const len = results.rows.length;
              let i;

              for (i = 0; i < len; i++) {
                cList = cList.concat(results.rows.item(i).item);
              }
              console.log(cList);
              return {
                ...state,
                consList: [...cList],
              };
            },
            null
          );
        });
        return cList;
      }; */
      console.log(state.prosList);
      return {
        ...state,
        // prosList: [...a],
        // consList: [...b],
      };
    case actionTypes.ADD_PRO:
      const prepareDatabas = () =>
        openDatabase('proscons', '1.0', 'proscons', 2 * 1024 * 1024);
      const d = prepareDatabas();
      d.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS PROS (item)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS CONS (item)');
        // tx.executeSql(`INSERT INTO PROS (item) VALUES ("${action.item}")`);
        // console.log('1 row added');
      });
      return {
        ...state,
        prosList: [...state.prosList].concat(action.item),
      };

    case actionTypes.EDIT_PRO:
      tempArray = [...state.prosList];
      tempString = action.event.target.value;
      index = action.index;
      tempArray[index] = tempString;
      if (!tempString) {
        tempArray.splice(index, 1);
      }
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
      return {
        ...state,
        prosList: [...tempArray].concat(state.dragingItem),
        consList: [...tempArray2],
        dragingItem: '',
      };

    case actionTypes.ADD_CON:
      return {
        ...state,
        consList: [...state.consList].concat(action.item),
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

    default:
      return state;
  }
};

export default reducer;
