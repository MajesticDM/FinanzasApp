import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosMensualesPage } from './gastos-mensuales.page';

const routes: Routes = [
  {
    path: '',
    component: GastosMensualesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosMensualesPageRoutingModule {}
