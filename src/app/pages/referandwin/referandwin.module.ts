import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferandwinPageRoutingModule } from './referandwin-routing.module';

import { ReferandwinPage } from './referandwin.page';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferandwinPageRoutingModule,
    BackButtonComponent

  ],
  declarations: [ReferandwinPage]
})
export class ReferandwinPageModule {}
