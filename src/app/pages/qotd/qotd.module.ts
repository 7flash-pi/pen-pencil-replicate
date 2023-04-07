import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QotdPageRoutingModule } from './qotd-routing.module';

import { QotdPage } from './qotd.page';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QotdPageRoutingModule,
    BackButtonComponent


  ],
  declarations: [QotdPage]
})
export class QotdPageModule {}
