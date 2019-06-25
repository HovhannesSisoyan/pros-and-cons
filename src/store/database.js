/* eslint-disable no-return-await */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable spaced-comment */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
async function readFromDatabase() {
  // let pList = [];
  // let cList = [];
  const prepareDatabase = () =>
    openDatabase('proscons', '1.0', 'proscons', 2 * 1024 * 1024);

  const createTables = db => {
    db.transaction(function(tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS PROS (item)');
      tx.executeSql('CREATE TABLE IF NOT EXISTS CONS (item)');
      //tx.executeSql('INSERT INTO PROS (item) VALUES ("burgers are testy")');
      //console.log('1 row added');
    });
  };
  const collectPros = db => {
    let pList = [];
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
          console.log(pList);
        },
        null
      );
    });
  };
  const collectCons = db => {
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
        },
        null
      );
    });
  };
  const db = await prepareDatabase();
  await createTables(db);
  return await collectPros(db);
  // cList = await collectCons(db);
  // console.log(pList);
}

export default readFromDatabase;
