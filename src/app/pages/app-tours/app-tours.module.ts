import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AppToursPageRoutingModule } from './app-tours-routing.module';

import { AppToursPage } from './app-tours.page';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppToursPageRoutingModule,
    BackButtonComponent
  ],
  declarations: [AppToursPage]
})
export class AppToursPageModule {}
