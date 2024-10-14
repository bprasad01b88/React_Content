import React, { useEffect, useState } from "react";
import { detectIncognito } from "detectincognitojs";

const Incognito = () => {
    
    const [isIncognito, setIsIncognito] = useState()
      useEffect(() => {
        const checkIncognitoStatus = async () => {
          const result = await detectIncognito();
          const isIncognito = result.isPrivate;
    
          // Get previously stored status
          const storedStatus = localStorage.getItem('incognitoStatus');
          console.log("storedStatus", storedStatus)
            setIsIncognito(storedStatus);
          if (storedStatus && storedStatus !== JSON.stringify(isIncognito)) {
            // Status changed, refresh the page
            window.location.reload();
          }
    
          // Store current status
          localStorage.setItem('incognitoStatus', JSON.stringify(isIncognito));
        };
    
        checkIncognitoStatus();
      }, []);
      console.log("isIncognito", isIncognito)
    return (
      <div>
        <h1>Browser Mode Detection</h1>
      {`incognito-${isIncognito}`}
      </div>
    );
}

export default Incognito