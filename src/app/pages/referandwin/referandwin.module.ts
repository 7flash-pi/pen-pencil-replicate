import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferandwinPageRoutingModule } from './referandwin-routing.module';

import { ReferandwinPage } from './referandwin.page';
import { SharedModule } from 'src/app/component/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferandwinPageRoutingModule,
    SharedModule
  ],
  declarations: [ReferandwinPage]
})
export class ReferandwinPageModule {}
