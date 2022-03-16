import { useReducer, useContext, useEffect } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';

import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { PlacesContext } from '../';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker [];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  
  const { places } = useContext(PlacesContext);

  useEffect(() => {
    state.markers.forEach(marker => marker.remove());
    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new  Popup()
      .setHTML(`
        <h4>${place.text_es}</h4>
        <p>${place.place_name_es}</p>
      `);

      const newMarker =  new Marker({
        color: '#61DAFB'
      })
        .setLngLat([lng, lat])
        .addTo(state.map!);

        newMarkers.push(newMarker);

        //todo: limpiar polyline
        dispatch({type: 'setMarkers', payload: newMarkers});

        //todo: nuevos marcadores
    }
  }, [places]);
  

  const setMap = (map: Map) => {

    const myLocationPopup = new Popup()
    .setHTML(`
      <h4>Aqui estoy</h4>
      <p>En algun lugar del mundo :)</p>
    `);

    new Marker({
      color: '#61DAFB'
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: 'setMap', payload: map });
  };

  const getRouteBetweenPoints = async (start: [number, number], end :[number, number]) => {
    
  }

  return (
    <MapContext.Provider
      value={{
        ...state,
        //methods
        setMap,
        getRouteBetweenPoints
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
