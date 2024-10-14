import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(false); // Default to offline

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then(registration => {
        setOnline(registration.active && navigator.onLine);
      });
    } else {
      // No active service worker, directly rely on browser's online event
      setOnline(navigator.onLine);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return online;
};

export default useOnlineStatus;
