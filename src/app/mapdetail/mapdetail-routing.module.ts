import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapdetailPage } from './mapdetail.page';

const routes: Routes = [
  {
    path: '',
    component: MapdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapdetailPageRoutingModule {}
