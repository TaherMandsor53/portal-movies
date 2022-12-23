import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../action/action';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetails());
  }, [dispatch]);

  const getMovieList = useSelector(state => state.movieDetails);
  console.log({ getMovieList });
  return <div>Home</div>;
}
