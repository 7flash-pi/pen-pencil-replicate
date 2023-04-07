import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPackagePageRoutingModule } from './my-package-routing.module';

import { MyPackagePage } from './my-package.page';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPackagePageRoutingModule,
    BackButtonComponent
  ],
  declarations: [MyPackagePage]
})
export class MyPackagePageModule {}
