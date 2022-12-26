import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../action/action';
import { SearchBox, initializeIcons, Dropdown } from '@fluentui/react';
import { dropdownOptions, filterColumns } from '../constants/constants';
import MovieTableDetails from './movieTableDetails/MovieTableDetails';
import LoaderImg from '../assets/loader.svg';
import { filterTableData } from '../constants/transform';

export default function Home() {
  initializeIcons();
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');
  const [dropVal, setDropVal] = useState('');
  const [tableData, setTableData] = useState('');

  useEffect(() => {
    dispatch(getMovieDetails());
  }, [dispatch]);

  const getMovieList = useSelector(state => state?.getMovieListReducer?.movieDetails?.results);
  const isLoading = useSelector(state => state?.getMovieListReducer?.isFetching);
  const transformTableData = filterTableData(getMovieList);

  const onSearchChange = useCallback(
    (e, searchText) => {
      const lowercasedValue = searchText.toLowerCase().trim();
      setSearchVal(lowercasedValue);
      if (lowercasedValue === '') {
        setTableData(transformTableData);
      } else {
        const filteredData =
          transformTableData &&
          transformTableData.length > 0 &&
          transformTableData.filter(item => {
            return Object.keys(item).some(key =>
              filterColumns.includes(key) ? item[key].toString().toLowerCase().includes(lowercasedValue) : false,
            );
          });
        setTableData(filteredData);
      }
    },
    [transformTableData],
  );

  const onDropdownChange = (e, item) => {
    setDropVal(item);
    let sortedData = '';
    if (item?.key === 'episode') {
      sortedData =
        transformTableData &&
        transformTableData.length > 0 &&
        transformTableData.sort((a, b) => a.episodeId - b.episodeId);
      setTableData(sortedData);
    } else {
      sortedData =
        transformTableData && transformTableData.length > 0 && transformTableData.sort((a, b) => a.year - b.year);
      setTableData(sortedData);
    }
  };

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
        <SearchBox value={searchVal} placeholder="Type to search..." onChange={onSearchChange} className="search-box" />
      </div>

      {isLoading ? (
        <img src={LoaderImg} alt="loader-img" className="loader-img" />
      ) : (
        <>
          {transformTableData && transformTableData.length > 0 && (
            <MovieTableDetails data={tableData || transformTableData} />
          )}
        </>
      )}
    </div>
  );
}
