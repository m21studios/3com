import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productdetail/:image/:name/:price',
    loadChildren: () => import('./productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  /*{
    path: 'mainstore',
    loadChildren: () => import('./mainstore/mainstore.module').then( m => m.MainstorePageModule)
  },*/
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'adduserinformation',
    loadChildren: () => import('./adduserinformation/adduserinformation.module').then( m => m.AdduserinformationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'mapdetail',
    loadChildren: () => import('./mapdetail/mapdetail.module').then( m => m.MapdetailPageModule)
  },
  {
    path: 'chatusers',
    loadChildren: () => import('./chatusers/chatusers.module').then( m => m.ChatusersPageModule)
  },
  {
    path: 'chatroom', ///:username/:image
    loadChildren: () => import('./chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  /*{
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },*/
  {
    path: 'buyproduct',
    loadChildren: () => import('./buyproduct/buyproduct.module').then( m => m.BuyproductPageModule)
  },
  {
    path: 'paymentmethods',
    loadChildren: () => import('./paymentmethods/paymentmethods.module').then( m => m.PaymentmethodsPageModule)
  },
  /*{
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },*/
  {
    path: 'validateemail',
    loadChildren: () => import('./validateemail/validateemail.module').then( m => m.ValidateemailPageModule)
  },
  /*{
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },*/
  {
    path: 'tabsmenu',
    loadChildren: () => import('./tabsmenu/tabsmenu.module').then( m => m.TabsmenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
