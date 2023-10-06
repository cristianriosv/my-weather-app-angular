import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureForecastComponent } from './pages/forecast/forecast.component';

export const routes: Routes = [
  {
    path: '',
    component: FeatureForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureForecastRoutingModule {}