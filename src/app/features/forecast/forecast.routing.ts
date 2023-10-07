import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureForecastComponent } from './pages/forecast/forecast.component';
import { AutocompleteComponent } from 'src/app/shared/components/autocomplete/autocomplete.component';

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
    AutocompleteComponent
  ],
  exports: [RouterModule]
})
export class FeatureForecastRoutingModule {}