import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';


import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeContentComponent } from 'src/app/component/home-content/home-content.component';
import { ContentSliderComponent } from 'src/app/component/content-slider/content-slider.component';
import { HomeNavComponent } from 'src/app/component/home-nav/home-nav.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ContentSliderComponent,
    HomeNavComponent,
  ],
  declarations: [HomePage,HomeContentComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePageModule {}
