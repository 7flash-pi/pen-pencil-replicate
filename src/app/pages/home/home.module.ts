import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';


import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeContentComponent } from 'src/app/component/home-content/home-content.component';
import { ContentSliderComponent } from 'src/app/component/content-slider/content-slider.component';
import { SharedModule } from 'src/app/component/shared.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage,HomeContentComponent,ContentSliderComponent]

})
export class HomePageModule {}
