import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeudasPageRoutingModule } from './deudas-routing.module';

import { DeudasPage } from './deudas.page';
import { register } from 'swiper/element/bundle';

register();
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeudasPageRoutingModule
  ],
  declarations: [DeudasPage]
})
export class DeudasPageModule {}
