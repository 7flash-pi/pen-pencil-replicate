import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdlPage } from './sdl.page';

const routes: Routes = [
  {
    path: '',
    component: SdlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SdlPageRoutingModule {}
