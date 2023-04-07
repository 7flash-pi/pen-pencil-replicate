import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadedPageRoutingModule } from './downloaded-routing.module';

import { DownloadedPage } from './downloaded.page';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadedPageRoutingModule,
    BackButtonComponent
  ],
  declarations: [DownloadedPage]
})
export class DownloadedPageModule {}
