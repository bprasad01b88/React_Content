
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import { getFingerprint } from "@thumbmarkjs/thumbmarkjs";
import { v4 as uuidv4 } from 'uuid';
// import useUniqueId from './utils/useUniqueId';
import FingerprintJS from '@fingerprintjs/fingerprintjs';





// import db from './db/db';
// import OnlineStatus from './components/OnlineStatus';
// import { setOnlineStatus } from './redux/statusSlice';
// import ItemLists from './components/ItemLists';
// import { addItem } from './redux/itemSlice';
function App() {
  // const uniqueIds = useUniqueId(); 
  // console.log("MAC ADDRESS---->",uniqueIds);
  const dispatch = useDispatch();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  
  console.log(`User Agent: ${userAgent}`);
  console.log(`Platform: ${platform}`);
  console.log(`Screen Resolution: ${screenResolution}`);
  // useEffect(() => {
  //   // Event listener for online/offline status change
  //   const handleOnlineStatusChange = () => {
  //     dispatch(setOnlineStatus(navigator.onLine));
  //   };

  //   window.addEventListener('online', handleOnlineStatusChange);
  //   window.addEventListener('offline', handleOnlineStatusChange);

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener('online', handleOnlineStatusChange);
  //     window.removeEventListener('offline', handleOnlineStatusChange);
  //   };
  // }, [dispatch]);

  // const addItemHandler = async () => {
  //   const name = prompt('Enter item name:');
  //   if (name) {
  //     const newItem = { name };
  //     dispatch(addItem(newItem));
  //     if (navigator.onLine) {
  //       try {
  //         // Logic to save item to server can be implemented here
  //         // For simplicity, let's just save it to IndexDB for now
  //         await db.items.add(newItem);
  //       } catch (error) {
  //         console.error('Error saving item to IndexDB:', error);
  //       }
  //     }
  //   }
  // };

  const [fingerprint, setFingerprint] = useState('');
  const [thumbmarks, setThumbmarks] = useState('');

  
    useEffect(() => {
      getFingerprint()
        .then((result) => {
          console.log("Result", result)
          setFingerprint(result);
        })
        .catch((error) => {
          console.error('Error getting fingerprint:', error);
        });
    }, []);
    console.log("fingerprint", fingerprint)
    const [fingerprints, setFingerprints] = useState(null);

    useEffect(() => {
      const getFingerprint = async () => {
        // Initialize FingerprintJS
        const fp = await FingerprintJS.load();
        // Get a visitor identifier
        const result = await fp.get();
        setFingerprints(result.visitorId);
      };
  
      getFingerprint();
    }, []);
  

  return (
    <div className="App">
     {/* <OnlineStatus /> */}
     <BrowserRouter>
     <div>{isOnline ? 'Online' : 'Offline'}</div>
      <Routes>
        {/* <Route exact path="/" element={<Home fingerprint={fingerprint} thumbmarks={fingerprints}/>}/> */}
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/add" element={<AddItem />}/>
        <Route exact path="/edit/:id" element={<EditItem />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
