import { ForecastState } from "./forecast/forecast.reducer";
import { GeocodeState } from "./geocode/geocode.reducer";

export type AppState = {
    geocodeReducer: GeocodeState,
    forecastReducer: ForecastState
};