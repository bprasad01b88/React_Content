import Dexie from 'dexie';

const db = new Dexie('myDatabase');
db.version(1).stores({ items: '++id,name,description' });

export default db;