/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
export const initializePros = list => ({
  type: 'INIT_PROS',
  list,
});

export const initializeCons = list => ({
  type: 'INIT_CONS',
  list,
});

const prepareDatabase = () =>
  openDatabase('proscons', '1.0', 'proscons', 2 * 1024 * 1024);

const createTables = db => {
  db.transaction(function(tx) {
    // tx.executeSql('DROP TABLE PROS');
    // tx.executeSql('DROP TABLE CONS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS PROS (item)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CONS (item)');
  });
};

const db = prepareDatabase();

export const readFromDatabase = dispatch => {
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

export const writeToDb = (pList, cList) => {
  db.transaction(function(tx) {
    tx.executeSql('DROP TABLE CONS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CONS (item)');
    tx.executeSql('DROP TABLE PROS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS PROS (item)');
    cList.forEach(item => {
      tx.executeSql(`INSERT INTO CONS (item) VALUES ("${item}")`);
    });
    pList.forEach(item => {
      tx.executeSql(`INSERT INTO PROS (item) VALUES ("${item}")`);
    });
  });
};
