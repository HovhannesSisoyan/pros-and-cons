const prepareDatabase = () =>
  openDatabase('proscons', '1.0', 'proscons', 2 * 1024 * 1024);

// eslint-disable-next-line no-shadow
export const createTables = db => {
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS PROS (item)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CONS (item)');
  });
};

export const db = prepareDatabase();
