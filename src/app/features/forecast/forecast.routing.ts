import { NgModule } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FeatureForecastComponent } from './pages/forecast/forecast.component';
import { AutocompleteComponent } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

export const routes: Routes = [
  {
    path: '',
    component: FeatureForecastComponent
  }
];

@NgModule({
  declarations: [FeatureForecastComponent],
  imports: [
    RouterModule.forChild(routes),
    AutocompleteComponent,
    TableComponent,
    CurrentWeatherComponent,
    NgFor,
    NgIf,
    MatIconModule
  ],
  exports: [RouterModule]
})
export class FeatureForecastRoutingModule {}