import axios from 'axios';

const directionsApi = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/directions/v5/mapbox/driving`,
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: process.env.REACT_APP_MAPBOX_TOKEN,
  },
});

export default directionsApi;
