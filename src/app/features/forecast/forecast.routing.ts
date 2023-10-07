import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureForecastComponent } from './pages/forecast/forecast.component';
import { AutocompleteApiComponent } from 'src/app/shared/components/autocomplete-api/autocomplete-api.component';

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
    AutocompleteApiComponent
  ],
  exports: [RouterModule]
})
export class FeatureForecastRoutingModule {}