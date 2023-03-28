import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/provider/content/content.service';
import { ContentModal } from 'src/app/provider/content/course.model';

@Component({
  selector: 'app-app-tours',
  templateUrl: './app-tours.page.html',
  styleUrls: ['./app-tours.page.scss'],
})
export class AppToursPage implements OnInit {

  btnText:string="App tours & offers";
  btnIcon:string="arrow-back-outline";
  defaultHref:string="home";
  programId:'624d5931faaac60019658837';
  subjectId = '624d593f7935d3001824ca52';
  chapterId = '624d59483d19ac00180d0924';
  topicId = '624d595397a01500183e8232';



  constructor(private contentService:ContentService) { }

  ngOnInit() {



  }



}
