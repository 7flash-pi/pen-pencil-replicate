import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutLatestVersionPage } from './about-latest-version.page';

const routes: Routes = [
  {
    path: '',
    component: AboutLatestVersionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutLatestVersionPageRoutingModule {}
