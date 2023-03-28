import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TandcModalPage } from './tandc-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TandcModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TandcModalPageRoutingModule {}
