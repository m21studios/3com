import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatusersPage } from './chatusers.page';

const routes: Routes = [
  {
    path: '',
    component: ChatusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatusersPageRoutingModule {}
