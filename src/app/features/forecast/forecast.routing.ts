import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureForecastComponent } from './pages/forecast/forecast.component';
import { AutocompleteComponent } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { NgFor } from '@angular/common';

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
    NgFor
  ],
  exports: [RouterModule]
})
export class FeatureForecastRoutingModule {}