import axios from 'axios';

const basicUrl = 'https://api.themoviedb.org/3/';
const apiKey = '0402639248cace151841958273081105';

export const getTrendMovies = () => {
  return axios
    .get(`${basicUrl}trending/movie/day?api_key=${apiKey}`)
    .then(response => response.data.results);
};

export const openSingleMovie = id => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
};

//
