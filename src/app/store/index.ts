import {
  ActionReducerMap,
} from '@ngrx/store';
import { geocodeReducer } from './geocode/geocode.reducer';
import { GeoCodeEffects } from './geocode/geocode.effects';
import { forecastReducer } from './forecast/forecast.reducer';
import { ForecastEffects } from './forecast/forecast.effects';

export const reducers: ActionReducerMap<object> = {
  geocodeReducer,
  forecastReducer
};

export const effects = [
  GeoCodeEffects,
  ForecastEffects
];
