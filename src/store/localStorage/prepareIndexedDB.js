/* eslint-disable no-restricted-globals */
/* eslint-disable no-multi-assign */
/* eslint-disable import/no-mutable-exports */
export const openIndexedDBRequest = window.indexedDB.open('MyTestDatabase', 3);
openIndexedDBRequest.onerror = function() {
  console.log('IndexedDB is not opened');
};
