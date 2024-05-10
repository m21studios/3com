import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatusersPageRoutingModule } from './chatusers-routing.module';

import { ChatusersPage } from './chatusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatusersPageRoutingModule
  ],
  declarations: [ChatusersPage]
})
export class ChatusersPageModule {}
