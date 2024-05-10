import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsmenuPageRoutingModule } from './tabsmenu-routing.module';

import { TabsmenuPage } from './tabsmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsmenuPageRoutingModule
  ],
  declarations: [TabsmenuPage]
})
export class TabsmenuPageModule {}
