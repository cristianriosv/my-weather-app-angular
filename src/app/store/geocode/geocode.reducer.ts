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
    on(getGeocodeLocationsSuccess, (_, data) => ({ geocodeLocations: data.geocodeLocations, error: false })),
    on(getGeocodeLocationsError, (_) => ({ geocodeLocations: [], error: true }))
);