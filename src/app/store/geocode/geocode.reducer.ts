import { createReducer, on } from '@ngrx/store';
import { getGeocodeLocations, getGeocodeLocationsError, getGeocodeLocationsSuccess } from './geocode.actions';

export interface GeocodeState {
    geocodeLocations: GeocodeData[];
    error: boolean;
}

export const initialState: GeocodeState = { geocodeLocations: [], error: false };

export const geocodeReducer = createReducer(
    initialState,
    on(getGeocodeLocations, () => initialState),
    on(getGeocodeLocationsSuccess, (state, data) => ({ ...state, geocodeLocations: data.geocodeLocations, error: false })),
    on(getGeocodeLocationsError, (state) => ({ ...state, geocodeLocations: [], error: true }))
);