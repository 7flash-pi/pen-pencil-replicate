import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QotdPage } from './qotd.page';

const routes: Routes = [
  {
    path: '',
    component: QotdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QotdPageRoutingModule {}
