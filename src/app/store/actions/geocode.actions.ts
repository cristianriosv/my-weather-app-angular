import { createAction, props } from '@ngrx/store';

export const getGeocodeLocations = createAction('[Geocode] Get Geocode Locations', props<{ query: string }>());
export const getGeocodeLocationsSuccess = createAction('[Geocode] Get Geocode Locations Success', props<{ geocodeLocations: GeocodeData[] }>());
export const getGeocodeLocationsError = createAction('[Geocode] Get Geocode Locations Error');
