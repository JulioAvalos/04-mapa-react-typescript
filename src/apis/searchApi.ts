import axios from 'axios';

const searchApi = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/geocoding/v5/mapbox.places`,
  params: {
    limit: 5,
    language: 'es',
    access_token: process.env.REACT_APP_MAPBOX_TOKEN,
  },
});

export default searchApi;
