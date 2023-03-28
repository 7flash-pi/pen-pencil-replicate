import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TandcModalPageRoutingModule } from './tandc-modal-routing.module';

import { TandcModalPage } from './tandc-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TandcModalPageRoutingModule
  ],
  declarations: [TandcModalPage]
})
export class TandcModalPageModule {}
