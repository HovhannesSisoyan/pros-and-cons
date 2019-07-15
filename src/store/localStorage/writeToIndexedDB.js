// import db from './prepareIndexedDB';
let db;

const save = () => ({
  type: 'STORE',
});

export const writeToIndexedDB = function(dispatch, getState) {
  console.log('write to indexedDb called');
  const state = getState();
  const request = window.indexedDB.open('MyTestDatabase', 5);
  request.onerror = function() {
    console.log('IndexedDB is not opened');
  };
  // request.onsuccess = function(event) {
  //  db = event.target.result;
  // };
  request.onupgradeneeded = event => {
    console.log('onupneeded');
    db = request.result;
    const prosStore = db.createObjectStore('PROS', { autoIncrement: true });
    const consStore = db.createObjectStore('CONS', { autoIncrement: true });
    state.prosList.forEach(item => {
      prosStore.add(item);
    });
    state.consList.forEach(item => {
      consStore.add(item);
    });
    dispatch(save());
  };
};
