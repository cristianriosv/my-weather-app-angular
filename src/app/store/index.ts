import {
  ActionReducerMap,
} from '@ngrx/store';
import { geocodeReducer } from './reducers/geocode.reducer';
import { GeoCodeEffects } from './effects/geocode.effects';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  geocodeReducer: geocodeReducer
};

export const effects: any[] = [
  GeoCodeEffects
];
