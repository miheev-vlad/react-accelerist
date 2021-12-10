import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToken, signOut } from '../../../redux';

const SearchPage = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ paddingTop: 100, paddingLeft: 40 }}>
      <h2>Search Page</h2>
      <br />
      <button
        onClick={() => {
          dispatch(signOut());
          dispatch(clearToken());
        }}>
        Log Out
      </button>
    </div>
  );
};

export default SearchPage;
