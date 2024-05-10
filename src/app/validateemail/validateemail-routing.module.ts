import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateemailPage } from './validateemail.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateemailPageRoutingModule {}
