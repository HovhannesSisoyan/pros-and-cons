/* eslint-disable import/no-cycle */
import * as database from './prepareIndexedDB';
import * as actions from '../actionCreators';

let db;

export const writeToIndexedDB = function(dispatch, getState) {
  console.log('write to indexed db called');
  const opendbRequest = window.indexedDB.open(
    database.dbName,
    database.dbVersion
  );
  const state = getState();

  opendbRequest.onerror = function() {
    console.log('IndexedDB is not opened');
  };

  opendbRequest.onsuccess = () => {
    db = opendbRequest.result;
    const tr = db.transaction(['PROS', 'CONS'], 'readwrite');
    const prosStore = tr.objectStore('PROS');
    const consStore = tr.objectStore('CONS');
    const clearProsReq = prosStore.clear();
    const clearConsReq = consStore.clear();
    clearProsReq.onsuccess = () => {
      state.prosList.forEach(item => {
        const prosReq = prosStore.add(item);
        prosReq.onsuccess = () => {
          dispatch(actions.save());
        };
      });
    };

    clearConsReq.onsuccess = () => {
      state.consList.forEach(item => {
        const consReq = consStore.add(item);
        consReq.onsuccess = () => {
          dispatch(actions.save());
        };
      });
    };
  };
};
