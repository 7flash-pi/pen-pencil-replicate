import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferandwinPage } from './referandwin.page';

const routes: Routes = [
  {
    path: '',
    component: ReferandwinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferandwinPageRoutingModule {}
