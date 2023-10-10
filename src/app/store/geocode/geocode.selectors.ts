import { createSelector } from '@ngrx/store';
import { AppState } from '../general.state';

export const geocodeSelector = createSelector(
    (state: AppState) => state.geocodeReducer.geocodeLocations,
    (geocodeLocations: GeocodeData[]) => geocodeLocations
);
