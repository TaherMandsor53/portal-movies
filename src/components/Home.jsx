import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../action/action';
import { SearchBox, initializeIcons, Dropdown } from '@fluentui/react';
import { dropdownOptions } from '../constants/constants';
import Table from './table/Table';
import LoaderImg from '../assets/loader.svg';

export default function Home() {
  initializeIcons();
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');
  const [dropVal, setDropVal] = useState('');

  useEffect(() => {
    dispatch(getMovieDetails());
  }, [dispatch]);

  const onSearchChange = useCallback(searchText => {
    setSearchVal(searchText);
  }, []);

  const onDropdownChange = (e, item) => {
    console.log({ item });
  };

  const getMovieList = useSelector(state => state?.getMovieListReducer?.movieDetails?.results);
  const isLoading = useSelector(state => state?.getMovieListReducer?.isFetching);
  console.log({ getMovieList });
  return (
    <div className="home-main">
      <div className="home-header">
        <Dropdown
          options={dropdownOptions}
          className="dropdown-comp"
          placeholder="Sort By..."
          value={dropVal}
          onChange={onDropdownChange}
        />
        <SearchBox placeholder="Type to search..." onSearch={onSearchChange} className="search-box" />
      </div>

      {isLoading ? (
        <img src={LoaderImg} alt="loader-img" className="loader-img" />
      ) : (
        <div className="movie-detail-section">
          {getMovieList && getMovieList.length > 0 && <Table data={getMovieList} />}
          <div className="no-movie-info">no movie selected</div>
        </div>
      )}
    </div>
  );
}
