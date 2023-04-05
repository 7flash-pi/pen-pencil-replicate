import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPackagePage } from './my-package.page';

const routes: Routes = [
  {
    path: '',
    component: MyPackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPackagePageRoutingModule {}
