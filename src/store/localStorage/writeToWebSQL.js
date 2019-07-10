import { db } from './prepareWebSQL';

const save = () => ({
  type: 'STORE',
});

export const writeToWebSQL = (dispatch, getState) => {
  console.log('write to db called');
  const state = getState();
  db.transaction(function(tx) {
    tx.executeSql('DELETE FROM PROS');
    tx.executeSql('DELETE FROM CONS');
    state.prosList.forEach(item => {
      tx.executeSql(`INSERT INTO PROS (item) VALUES ("${item}")`);
    });
    state.consList.forEach(item => {
      tx.executeSql(`INSERT INTO CONS (item) VALUES ("${item}")`);
    });
    dispatch(save());
  });
};
