import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/general.state';
import { geocodeSelector } from 'src/app/store/geocode/geocode.selectors';
import { getGeocodeLocations } from 'src/app/store/geocode/geocode.actions';
import { forecastSelector } from 'src/app/store/forecast/forecast.selectors';
import { getForecastFromLocation } from 'src/app/store/forecast/forecast.actions';

@Component({
  selector: 'feature-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
})
export class FeatureForecastComponent {

  possibleCities: { label: string, value: GeocodeData }[] = [];

  geocodeLocations$ = this.store.select(geocodeSelector);

  forecast$ = this.store.select(forecastSelector);

  currentCityForecastToday: ForecastDataItem | null = null;

  currentCityForecast: ReducedForecastData | null = null;
  
  columns = [
    { columnDef: 'dateString', header: 'Date', cell: (element: ForecastItemData) => `${element.dateString}`, sort: true },
    { columnDef: 'temp_max', header: 'Max', cell: (element: ForecastItemData) => `${element.temp_max}` },
    { columnDef: 'temp_min', header: 'Min', cell: (element: ForecastItemData) => `${element.temp_min}` },
    { columnDef: 'humidity', header: 'Humidity', cell: (element: ForecastItemData) => `${element.humidity}` },
  ]

  displayedColumns: string[] = ['dateString', 'temp_max', 'temp_min', 'humidity'];

  ngOnInit(): void {
    this.geocodeLocations$.subscribe((data) => {
      this.possibleCities = data.map((item) => ({ label: `${item.name}, ${item.state}, ${item.country}`, value: item }));
    });
    this.forecast$.subscribe((data) => {
      if (data) {
        this.currentCityForecastToday = data.current;
        this.currentCityForecast = data.forecast;
      }
    });
  }

  constructor(
    private store: Store<AppState>
  ) { }

  getPossibleCitiesFromService(value: string): void {
    this.store.dispatch(getGeocodeLocations({ query: value }));
  }

  getForecastFromService(optionSelected: { value: GeocodeData }): void {
    this.currentCityForecast = null;
    this.currentCityForecast = null;
    this.store.dispatch(getForecastFromLocation({ lat: optionSelected.value.lat, lon: optionSelected.value.lon}))
  }

}