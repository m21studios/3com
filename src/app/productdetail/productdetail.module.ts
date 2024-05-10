import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailPageRoutingModule } from './productdetail-routing.module';

import { ProductdetailPage } from './productdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailPageRoutingModule
  ],
  declarations: [ProductdetailPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductdetailPageModule {}
