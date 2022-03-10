import { PlacesState } from './PlacesProvider';

type PlacesAction = {
    type: 'setUserLocation',
    payload: [number, number]
};

export const placesReducer = (state: PlacesState, action: PlacesAction ): PlacesState => {
    
}