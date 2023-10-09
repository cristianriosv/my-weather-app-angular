import { Component } from '@angular/core';
import { GeocodeService } from '../../services/geocode.service';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'feature-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
})
export class FeatureForecastComponent {

  possibleCities: { label: string, value: GeocodeData }[] = [];

  currentCityForecastToday?: ForecastDataItem;

  currentCityForecast?: ReducedForecastData;

  columns = [
    { columnDef: 'dateString', header: 'Date', cell: (element: ForecastItemData) => `${element.dateString}`, sort: true },
    { columnDef: 'temp_max', header: 'Max', cell: (element: ForecastItemData) => `${element.temp_max}` },
    { columnDef: 'temp_min', header: 'Min', cell: (element: ForecastItemData) => `${element.temp_min}` },
    { columnDef: 'humidity', header: 'Humidity', cell: (element: ForecastItemData) => `${element.humidity}` },
  ]

  displayedColumns: string[] = ['dateString', 'temp_max', 'temp_min', 'humidity'];

  constructor(
    private geocodeService: GeocodeService,
    private forecastService: ForecastService
  ) { }

  getPossibleCitiesFromService(val: string): void {
    this.geocodeService.getGeocodeFromQuery(val).subscribe(cities => {
      this.possibleCities = cities.map(city => ({ label: `${city.name}, ${city.state}`, value: city }))
    });
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