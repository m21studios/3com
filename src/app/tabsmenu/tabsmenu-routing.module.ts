import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsmenuPage } from './tabsmenu.page';

const routes: Routes = [
  {
    path: '',
    component: TabsmenuPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'mainstore',
        loadChildren: () => import('../mainstore/mainstore.module').then( m => m.MainstorePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsmenuPageRoutingModule {}
