import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlogCardComponent } from './component/blog-card/blog-card.component';
import { GuidanceCardComponent } from './component/guidance-card/guidance-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'guidance',
    loadChildren: () => import('./pages/guidance/guidance.module').then( m => m.GuidancePageModule)
  },
 {
    path: 'sdl',
    loadChildren: () => import('./pages/sdl/sdl.module').then( m => m.SdlPageModule)
  },
  {
    path: 'referandwin',
    loadChildren: () => import('./pages/referandwin/referandwin.module').then( m => m.ReferandwinPageModule)
  },
  {
    path: 'downloaded',
    loadChildren: () => import('./pages/downloaded/downloaded.module').then( m => m.DownloadedPageModule)
  },
  {
    path: 'app-tours',
    loadChildren: () => import('./pages/app-tours/app-tours.module').then( m => m.AppToursPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
