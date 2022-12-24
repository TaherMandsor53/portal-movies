import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../action/action';
import Select from 'react-select';
import searchIcon from '../assets/search-icon.svg';
import closeIcon from '../assets/closeIcon.svg';

export default function Home() {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');
  const selectOptions = [
    { value: 'episode', label: 'Episode' },
    { value: 'year', label: 'Year' },
  ];
  useEffect(() => {
    dispatch(getMovieDetails());
  }, [dispatch]);

  const onSearchChange = useCallback(e => {
    setSearchVal(e.target.value);
  }, []);

  const onClearClick = () => {
    setSearchVal('');
  };

  const getMovieList = useSelector(state => state?.getMovieListReducer?.movieDetails?.results);
  console.log({ getMovieList });
  return (
    <div className="home-main">
      <div className="home-header">
        <Select options={selectOptions} className="select-comp" />

        <div className="input-main">
          <img src={searchIcon} alt="search-icon" />
          <input className="input-comp" onChange={onSearchChange} value={searchVal} />
          {searchVal && <img src={closeIcon} alt="close-icon" className="close-img" onClick={onClearClick} />}
        </div>
      </div>
    </div>
  );
}
