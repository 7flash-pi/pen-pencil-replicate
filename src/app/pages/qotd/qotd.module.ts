import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QotdPageRoutingModule } from './qotd-routing.module';

import { QotdPage } from './qotd.page';
import { SharedModule } from 'src/app/component/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QotdPageRoutingModule,
    SharedModule
  ],
  declarations: [QotdPage]
})
export class QotdPageModule {}
