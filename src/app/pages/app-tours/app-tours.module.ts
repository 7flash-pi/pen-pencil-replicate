import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/component/shared.module';

import { AppToursPageRoutingModule } from './app-tours-routing.module';

import { AppToursPage } from './app-tours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppToursPageRoutingModule,
    SharedModule
  ],
  declarations: [AppToursPage]
})
export class AppToursPageModule {}
