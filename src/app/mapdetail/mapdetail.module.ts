import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapdetailPageRoutingModule } from './mapdetail-routing.module';

import { MapdetailPage } from './mapdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapdetailPageRoutingModule
  ],
  declarations: [MapdetailPage]
})
export class MapdetailPageModule {}
