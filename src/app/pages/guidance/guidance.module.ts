import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidancePageRoutingModule } from './guidance-routing.module';

import { GuidancePage } from './guidance.page';
import { GuidanceCardComponent } from 'src/app/component/guidance-card/guidance-card.component';
import { BlogCardComponent } from 'src/app/component/blog-card/blog-card.component';

import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidancePageRoutingModule,

    BlogCardComponent,
    GuidanceCardComponent,
    BackButtonComponent

  ],
  declarations: [ GuidancePage,

              ]
})
export class GuidancePageModule {}
