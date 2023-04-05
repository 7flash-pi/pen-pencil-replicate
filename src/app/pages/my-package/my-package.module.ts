import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/component/shared.module';

import { MyPackagePageRoutingModule } from './my-package-routing.module';

import { MyPackagePage } from './my-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPackagePageRoutingModule,
    SharedModule
  ],
  declarations: [MyPackagePage]
})
export class MyPackagePageModule {}
