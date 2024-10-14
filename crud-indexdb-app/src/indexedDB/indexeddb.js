const idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

export const createCollectionInIndexedDB = () => {
    if (!idb) {
        console.log("This browser dosen't support indexdb");
        return;
    }

    console.log(idb);

    const request = idb.open("test-db", 2);
    request.onerror = (event) => {
        console.log("Error", event);
        console.log("An Error Occured ith IndexDB");
    }

    request.onupgradeneeded = (event) => {
        const db = request.result;

        if (!db.objectStoreNames.contains("userData")) {
            db.createObjectStore("userData", {
                keyPath: "id",
            });
        }
    }

    request.onsuccess = () => {
        console.log("Database opened successfully");
    }
}

export default idb;

