import { Component } from '@angular/core';
import { GeocodeService } from '../../services/geocode.service';

@Component({
  selector: 'feature-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class FeatureForecastComponent {

  possibleCities: { label: string, value: GeocodeData }[] = [];

  constructor(private geocodeService: GeocodeService) { }

  getPossibleCitiesFromService(val: string): void {
    this.geocodeService.getGeocodeFromQuery(val).subscribe(cities => {
      this.possibleCities = cities.map(city => ({ label: `${city.name}, ${city.state}`, value: city }))
    });
  }

  getForecastFromService(city: any): void {
    console.log(city);
  }

}