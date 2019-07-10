/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
// eslint-disable-next-line import/named
import { db, createTables } from './prepareWebSQL';

export const initializePros = list => ({
  type: 'INIT_PROS',
  list,
});

export const initializeCons = list => ({
  type: 'INIT_CONS',
  list,
});

export const readFromWebSQL = dispatch => {
  createTables(db);
  let pList = [];
  let cList = [];
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT * FROM PROS',
      [],
      function(tx, results) {
        const len = results.rows.length;
        let i;

        for (i = 0; i < len; i++) {
          pList = pList.concat(results.rows.item(i).item);
        }
        dispatch(initializePros(pList));
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
          cList = cList.concat(results.rows.item(i).item);
        }
        dispatch(initializeCons(cList));
      },
      null
    );
  });
};
