import { Component, Input } from '@angular/core';

@Component({
  selector: 'current-weather-component',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.sass'],
  standalone: true
})
export class CurrentWeatherComponent {
  @Input() data!: WeatherMainData
}
