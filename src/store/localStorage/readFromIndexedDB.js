// import { openIndexedDBRequest } from './prepareIndexedDB';
export const initializePros = list => ({
  type: 'INIT_PROS',
  list,
});
export const initializeCons = list => ({
  type: 'INIT_CONS',
  list,
});
export const readFromIndexedDB = dispatch => {
  const openIndexedDBRequest = window.indexedDB.open('MyTestDatabase', 3);
  // eslint-disable-next-line no-multi-assign
  let db = (openIndexedDBRequest.onsuccess = event => event.target.result);

  // eslint-disable-next-line no-multi-assign
  db = openIndexedDBRequest.onupgradeneeded = event => event.target.result;

  // export const readFromIndexedDB = dispatch => {
  db.transaction(['PROS', 'CONS']).objectStore(['PROS', 'CONS']);
  // objectStore.getAll().onsuccess = function(event) {
  //  console.log(`Got all customers: ${event.target.result}`);
  //  dispatch(initializePros());
  // };
  // };
};
