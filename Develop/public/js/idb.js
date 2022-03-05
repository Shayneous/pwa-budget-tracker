let db;
const request = indexedDB.open('budget_bracker', 1);

request.onupgradeneeded = function(event) {

    const db = event.target.result;

    db.createObjectStore('add_transaction', {autoIncrement: true});
};

request.onsuccess = function(event) {

    db = event.target.result;

    if (navigator.onLine) {
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};


function updateRecord(record) {

    const transaction = db.transaction(['add_transaction'], 'read_write');

    const  budgetObjectStore = transaction.objectStore('add_transaction');

    budgetObjectStore.add(record);
}; 