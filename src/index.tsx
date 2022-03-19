/* eslint import/no-webpack-loader-syntax: off*/
import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; 
 
mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_TOKEN}`;

if(!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de geolocation');
  throw new Error('Tu navegador no tiene opcion de geolocalizacion');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
