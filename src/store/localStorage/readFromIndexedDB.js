/* eslint-disable import/no-cycle */
import * as database from './prepareIndexedDB';
import * as actions from '../actionCreators';

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
      dispatch(actions.initializePros(prosReq.result));
    };
    consReq.onsuccess = () => {
      dispatch(actions.initializeCons(consReq.result));
    };
  };

  dbRequest.onupgradeneeded = () => {
    console.log('db request onupgradeneeded called');
    const db = dbRequest.result;
    db.createObjectStore('PROS', { autoIncrement: true });
    db.createObjectStore('CONS', { autoIncrement: true });
  };
};
