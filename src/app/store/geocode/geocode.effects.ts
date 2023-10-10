import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GeocodeService } from '../../shared/services/geocode.service';
import { getGeocodeLocations, getGeocodeLocationsSuccess, getGeocodeLocationsError } from './geocode.actions';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GeoCodeEffects {
    constructor(
        private actions$: Actions,
        private geocodeService: GeocodeService
    ) {}

    $getGeocodeLocations = createEffect(() =>
        this.actions$.pipe(
            ofType(getGeocodeLocations),
            switchMap(({ query }) => this.geocodeService.getGeocodeFromQuery(query).pipe(
                map((res: GeocodeData[]) => {
                    return getGeocodeLocationsSuccess({ geocodeLocations: res })
                }),
                catchError(() => of(getGeocodeLocationsError()))
            ))
        )
    );
}
