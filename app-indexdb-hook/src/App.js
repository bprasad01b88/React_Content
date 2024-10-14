import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { DBConfig } from './dbConfig';
import { initDB, IndexedDB } from 'react-indexed-db-hook';
import * as serviceWorker from './swDev';
import Home from './components/Home';
initDB(DBConfig);

const App = () => {
  
  useEffect(() => {
    serviceWorker.registerSync();
  }, [])
  return (
    <div>
     <IndexedDB 
      name="MyDB"
      version={1}
      objectStoresMeta={[
        {
          store: "people",
          storeConfig: { keyPath: "id", autoIncrement: true },
          storeSchema: [
            { name: "name", keypath: "name", options: { unique: false } },
            { name: "email", keypath: "email", options: { unique: false } },
          ],
        },
      ]}
     >
        <Home />
     </IndexedDB>
    </div>
  );
};

export default App;
