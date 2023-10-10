import { createAction, props } from '@ngrx/store';

export const getForecastFromLocation = createAction('[Forecast] Get Forecast from Location', props<{ lon: number, lat: number }>());
export const getForecastFromLocationSuccess = createAction('[Forecast] Get Forecast from Location Success', props<{ current: ForecastDataItem, forecast: ReducedForecastData}>());
export const getForecastFromLocationError = createAction('[Forecast] Get Forecast from Location Error');
