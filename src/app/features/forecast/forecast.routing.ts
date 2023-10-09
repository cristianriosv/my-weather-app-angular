import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureForecastComponent } from './pages/forecast/forecast.component';
import { AutocompleteComponent } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { NgFor, NgIf } from '@angular/common';

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
    NgFor,
    NgIf
  ],
  exports: [RouterModule]
})
export class FeatureForecastRoutingModule {}