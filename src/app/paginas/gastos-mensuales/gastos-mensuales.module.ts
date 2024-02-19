import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosMensualesPageRoutingModule } from './gastos-mensuales-routing.module';

import { GastosMensualesPage } from './gastos-mensuales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosMensualesPageRoutingModule
  ],
  declarations: [GastosMensualesPage]
})
export class GastosMensualesPageModule {}
