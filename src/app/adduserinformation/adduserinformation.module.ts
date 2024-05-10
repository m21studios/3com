import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdduserinformationPageRoutingModule } from './adduserinformation-routing.module';

import { AdduserinformationPage } from './adduserinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdduserinformationPageRoutingModule
  ],
  declarations: [AdduserinformationPage]
})
export class AdduserinformationPageModule {}
