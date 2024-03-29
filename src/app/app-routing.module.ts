import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


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
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'my-package',
    loadChildren: () => import('./pages/my-package/my-package.module').then( m => m.MyPackagePageModule)
  },
  {
    path: 'qotd',
    loadChildren: () => import('./pages/qotd/qotd.module').then( m => m.QotdPageModule)
  },
  {
    path: 'about-latest-version',
    loadChildren: () => import('./pages/about-latest-version/about-latest-version.module').then( m => m.AboutLatestVersionPageModule)
  },
  {
    path: 'enter-otp',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/enter-otp/enter-otp.component').then(mod => mod.EnterOtpComponent) //lazy loading
  },
  {
    path: 'my-package/no-renewal-plans',
    // component:NoRenewalPlanComponent  normal loading
    loadComponent: () => import('./component/no-renewal-plan/no-renewal-plan.component').then(mod => mod.NoRenewalPlanComponent) //lazy loading
  },
  {
    path: 'plans',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/plans/plan/plan.component').then(mod => mod.PlanComponent) //lazy loading
  },
  {
    path: 'course-select',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/plans/course-select/course-select.component').then(mod => mod.CourseSelectComponent) //lazy loading
  },
  {
    path: 'plans/nursing-olympiad',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/nursing-olypmpiad/nursing-olypmpiad.component').then(mod => mod.NursingOlypmpiadComponent) //lazy loading
  },
  {
    path: 'plans/nursing-olympiad/nursing-detail',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/nursing-detail/nursing-detail.component').then(mod => mod.NursingDetailComponent) //lazy loading
  },
  {
    path: 'plans/test-categories',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/test-categories/test-categories.component').then(mod => mod.TestCategoriesComponent) //lazy loading
  },
  {
    path: 'plans/test-categories/subject-test',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/test-categories/subject-test/subject-test.component').then(mod => mod.SubjectTestComponent) //lazy loading
  },
  {
    path: 'plans/test-categories/grand-test',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/test-categories/grand-test/grand-test.component').then(mod => mod.GrandTestComponent) //lazy loading
  },
  {
    path: 'plans/list-page',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/test-categories/list-page/list-page.component').then(mod => mod.ListPageComponent) //lazy loading
  },
  {
    path: 'video-player',
    // component:EnterOtpComponent  normal loading
    loadComponent: () => import('./component/video-player/video-player.component').then(mod => mod.VideoPlayerComponent) //lazy loading
  },
  {
    path:'plans/list-page/list-inside',
    loadComponent: () => import('./component/test-categories/list-page/list-inside/list-inside.component').then ( mod => mod.ListInsideComponent)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
