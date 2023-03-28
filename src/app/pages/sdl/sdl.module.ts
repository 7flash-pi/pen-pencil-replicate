import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdlPageRoutingModule } from './sdl-routing.module';

import { SdlPage } from './sdl.page';
import { SharedModule } from 'src/app/component/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdlPageRoutingModule,
    SharedModule
  ],
  declarations: [SdlPage]
})
export class SdlPageModule {}
