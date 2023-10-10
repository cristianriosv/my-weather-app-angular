import { createReducer, on } from '@ngrx/store';
import { getForecastFromLocation, getForecastFromLocationError, getForecastFromLocationSuccess } from './forecast.actions';

export interface ForecastState {
    current: ForecastDataItem | null,
    forecast: ReducedForecastData | null
    error: boolean;
}

export const initialState: ForecastState = { current: null, forecast: null, error: false };

export const forecastReducer = createReducer(
    initialState,
    on(getForecastFromLocation, () => initialState),
    on(getForecastFromLocationSuccess, (_, data) => ({ current: data.current, forecast: data.forecast, error: false })),
    on(getForecastFromLocationError, (_) => ({ ...initialState, error: true }))
);
