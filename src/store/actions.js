/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */

export const ADD_PRO = 'ADD_PRO';
export const EDIT_PRO = 'EDIT_PRO';
export const DRAG_PRO_START = 'DRAG_PRO_START';
export const DROP_PRO = 'DROP_PRO';

export const ADD_CON = 'ADD_CON';
export const EDIT_CON = 'EDIT_CON';
export const DRAG_CON_START = 'DRAG_CON_START';
export const DROP_CON = 'DROP_CON';

export const INIT_LISTS = 'INIT_LISTS';

export const initLists = () => ({
  type: INIT_LISTS,
});

export const initializeLists = function(initialState) {
  const db = openDatabase('pros-cons', '1.0', 'pros-cons', 2 * 1024 * 1024);
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS PROS (item)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CONS (item)');
    // tx.executeSql('INSERT INTO PROS (item) VALUES ("foobar")');
  });
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT * FROM PROS',
      [],
      function(tx, results) {
        console.log(results.rows.item(1));
        const len = results.rows.length;
        let i;

        for (i = 0; i < len; i++) {
          initialState.prosList = [...initialState.prosList].concat(
            results.rows.item(i).item
          );
        }
      },
      null
    );
    tx.executeSql(
      'SELECT * FROM CONS',
      [],
      function(tx, results) {
        const len = results.rows.length;
        let i;

        for (i = 0; i < len; i++) {
          initialState.consList = [...initialState.consList].concat(
            results.rows.item(i).item
          );
        }
      },
      null
    );
  });
  return dispatch => {
    dispatch(initLists());
  };
};
