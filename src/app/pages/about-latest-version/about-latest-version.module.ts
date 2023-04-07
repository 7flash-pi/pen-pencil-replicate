import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutLatestVersionPageRoutingModule } from './about-latest-version-routing.module';

import { AboutLatestVersionPage } from './about-latest-version.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutLatestVersionPageRoutingModule,
  ],
  declarations: [AboutLatestVersionPage]
})
export class AboutLatestVersionPageModule {}
