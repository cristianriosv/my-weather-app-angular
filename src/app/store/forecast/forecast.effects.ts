import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ForecastService } from '../../shared/services/forecast.service';
import { getForecastFromLocation, getForecastFromLocationSuccess, getForecastFromLocationError } from './forecast.actions';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ForecastDataUtils } from 'src/app/shared/utils/forecastData.utils';

@Injectable()
export class ForecastEffects {
    constructor(
        private actions$: Actions,
        private forecastService: ForecastService
    ) {}

    $getGeocodeLocations = createEffect(() =>
        this.actions$.pipe(
            ofType(getForecastFromLocation),
            switchMap(({ lat, lon }) => this.forecastService.getForecastFromService(lat, lon).pipe(
                map((res) => {
                    const groupedForecastByDays = ForecastDataUtils.groupForecastByDays(res.list);
                    const reducedForecastData = ForecastDataUtils.getMaximumValuesFromGroupedForecastData(groupedForecastByDays);
                    return getForecastFromLocationSuccess({
                      current: res.list[0],
                      forecast: reducedForecastData
                    })
                }),
                catchError(() => of(getForecastFromLocationError()))
            ))
        )
    );
}
