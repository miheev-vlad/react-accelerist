import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToken, signOut } from '../../../redux';

const SearchPage = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(signOut());
    dispatch(clearToken());
  };

  return (
    <div style={{ paddingTop: 100, paddingLeft: 40 }}>
      <h2>Search Page</h2>
      <br />
      <button onClick={onClick}>Log Out</button>
    </div>
  );
};

export default SearchPage;
