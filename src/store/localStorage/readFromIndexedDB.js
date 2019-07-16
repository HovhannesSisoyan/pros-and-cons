import * as database from './prepareIndexedDB';

export const initializePros = list => ({
  type: 'INIT_PROS',
  list,
});
export const initializeCons = list => ({
  type: 'INIT_CONS',
  list,
});
export const readFromIndexedDB = dispatch => {
  console.log('read from indexed db called');
  const opendbRequest = window.indexedDB.open(
    database.dbName,
    database.dbVersion
  );
  const dbRequest = opendbRequest;

  dbRequest.onsuccess = () => {
    const db = dbRequest.result;
    const tr = db.transaction(['PROS', 'CONS']);
    const prosStore = tr.objectStore('PROS');
    const consStore = tr.objectStore('CONS');
    const prosReq = prosStore.getAll();
    const consReq = consStore.getAll();
    prosReq.onsuccess = () => {
      dispatch(initializePros(prosReq.result));
    };
    consReq.onsuccess = () => {
      dispatch(initializeCons(consReq.result));
    };
  };

  dbRequest.onupgradeneeded = () => {
    console.log('db request onupgradeneeded called');
    const db = dbRequest.result;
    db.createObjectStore('PROS', { autoIncrement: true });
    db.createObjectStore('CONS', { autoIncrement: true });
  };
};
