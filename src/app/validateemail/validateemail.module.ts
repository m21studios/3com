import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateemailPageRoutingModule } from './validateemail-routing.module';

import { ValidateemailPage } from './validateemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateemailPageRoutingModule
  ],
  declarations: [ValidateemailPage]
})
export class ValidateemailPageModule {}
