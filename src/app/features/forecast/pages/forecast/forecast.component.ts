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

  currentCityForecast: ForecastDataList[] = [];

  constructor(private geocodeService: GeocodeService, private forecastService: ForecastService) { }

  getPossibleCitiesFromService(val: string): void {
    this.geocodeService.getGeocodeFromQuery(val).subscribe(cities => {
      this.possibleCities = cities.map(city => ({ label: `${city.name}, ${city.state}`, value: city }))
    });
  }

  getForecastFromService(optionSelected: { value: GeocodeData }): void {
    this.forecastService.getForecastFromService(optionSelected.value.lat, optionSelected.value.lon).subscribe(forecast => {
      if (forecast) {
        this.currentCityForecast = forecast;
      }
    });
  }

}