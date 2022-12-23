import axios from 'axios';

const baseURL = `https://swapi.dev`;

const getMovieDetails = () => {
  const URL = `${baseURL}/api/films/?format=json`;
  return axios.get(URL);
};

export default getMovieDetails;
