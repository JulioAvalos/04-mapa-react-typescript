/* eslint import/no-webpack-loader-syntax: off*/
import { useContext, useLayoutEffect, useRef } from 'react';

//@ts-ignore
import { Map } from '!mapbox-gl';

import { PlacesContext, MapContext } from '../context';
import { Loading } from './Loading';

export const MapView = () => {

  const { isLoading, userLocation } = useContext(PlacesContext);
  const {setMap} = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      {userLocation?.join(',')}
    </div>
  );
};
