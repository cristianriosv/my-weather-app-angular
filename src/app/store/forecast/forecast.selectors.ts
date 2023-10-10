import { createSelector } from '@ngrx/store';
import { AppState } from '../general.state';
import { ForecastState } from './forecast.reducer';

export const forecastSelector = createSelector(
    (state: AppState) => state.forecastReducer,
    (forecastData: ForecastState) => forecastData
);
