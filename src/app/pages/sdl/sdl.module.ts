import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdlPageRoutingModule } from './sdl-routing.module';

import { SdlPage } from './sdl.page';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdlPageRoutingModule,
    BackButtonComponent
  ],
  declarations: [SdlPage]
})
export class SdlPageModule {}
