import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/itemSlice';
import Incognito from './Incognito';
// const Home = ({fingerprint, thumbmarks}) => {
const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Items</h1>
      <Incognito />
      {/* <p>{fingerprint}</p>
      <span style={{color : "red"}}>{thumbmarks}</span>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
