import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppToursPage } from './app-tours.page';

const routes: Routes = [
  {
    path: '',
    component: AppToursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppToursPageRoutingModule {}
