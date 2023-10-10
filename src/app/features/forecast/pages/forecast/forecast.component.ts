import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ForecastService } from '../../services/forecast.service';
import { AppState } from 'src/app/store/general.state';
import { geocodeSelector } from 'src/app/store/selectors/geocode.selectors';
import { getGeocodeLocations } from 'src/app/store/actions/geocode.actions';

@Component({
  selector: 'feature-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
})
export class FeatureForecastComponent {

  possibleCities: { label: string, value: GeocodeData }[] = [];

  geocodeLocations$ = this.store.select(geocodeSelector);

  currentCityForecastToday?: ForecastDataItem;

  currentCityForecast?: ReducedForecastData;
  
  columns = [
    { columnDef: 'dateString', header: 'Date', cell: (element: ForecastItemData) => `${element.dateString}`, sort: true },
    { columnDef: 'temp_max', header: 'Max', cell: (element: ForecastItemData) => `${element.temp_max}` },
    { columnDef: 'temp_min', header: 'Min', cell: (element: ForecastItemData) => `${element.temp_min}` },
    { columnDef: 'humidity', header: 'Humidity', cell: (element: ForecastItemData) => `${element.humidity}` },
  ]

  displayedColumns: string[] = ['dateString', 'temp_max', 'temp_min', 'humidity'];

  ngOnInit(): void {
    this.geocodeLocations$.subscribe((data) => {
      this.possibleCities = data.map((item) => ({ label: item.name, value: item }));
    });
  }

  constructor(
    private forecastService: ForecastService,
    private store: Store<AppState>
  ) { }

  getPossibleCitiesFromService(value: string): void {
    this.store.dispatch(getGeocodeLocations({ query: value }))
  }

  getForecastFromService(optionSelected: { value: GeocodeData }): void {
    this.currentCityForecast = undefined;
    this.forecastService.getForecastFromService(optionSelected.value.lat, optionSelected.value.lon).subscribe(forecastData => {
      if (forecastData) {
        this.currentCityForecastToday = forecastData.current;
        this.currentCityForecast = forecastData.forecast;
      }
    });
  }

}