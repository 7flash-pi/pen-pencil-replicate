import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidancePageRoutingModule } from './guidance-routing.module';

import { GuidancePage } from './guidance.page';
import { GuidanceCardComponent } from 'src/app/component/guidance-card/guidance-card.component';
import { BlogCardComponent } from 'src/app/component/blog-card/blog-card.component';
import { BlogDetailComponent } from 'src/app/component/blog-detail/blog-detail.component';
import { SharedModule } from 'src/app/component/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidancePageRoutingModule,
    SharedModule

  ],
  declarations: [ GuidancePage,
                  GuidanceCardComponent,
                  BlogCardComponent,
              ]
})
export class GuidancePageModule {}
