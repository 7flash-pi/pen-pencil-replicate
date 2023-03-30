import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



import { BackButtonComponent } from './back-button/back-button.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { DownloadedPdfComponent } from './downloaded-pdf/downloaded-pdf.component';
import { DownloadedVideosComponent } from './downloaded-videos/downloaded-videos.component';
import { VideosBatchComponent } from './videos-batch/videos-batch.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { UserCardComponent } from './user-card/user-card.component';




@NgModule({
  declarations: [BackButtonComponent,
    BlogDetailComponent,
    DownloadedPdfComponent,
    DownloadedVideosComponent,
    VideosBatchComponent,
    SearchModalComponent,
    HomeNavComponent,
   UserCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports :[
    BackButtonComponent,
    BlogDetailComponent,
    DownloadedPdfComponent,
    VideosBatchComponent,
    DownloadedVideosComponent,
    SearchModalComponent,
    HomeNavComponent,
    UserCardComponent
  ]
})
export class SharedModule { }
