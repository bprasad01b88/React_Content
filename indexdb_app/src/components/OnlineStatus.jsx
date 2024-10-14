import React from 'react'
import { useSelector } from 'react-redux';

const OnlineStatus = () => {
    const isOnline = useSelector((state) => state.online.isOnline);

  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}

export default OnlineStatus