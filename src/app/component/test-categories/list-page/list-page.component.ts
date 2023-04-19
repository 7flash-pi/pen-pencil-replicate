import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../../back-button/back-button.component';
import { NgFor, NgIf } from '@angular/common';
import { ChapterModal } from 'src/app/provider/base/base.model';
import { ChapterService } from 'src/app/provider/chapter-service/chapter.service';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { lastValueFrom } from 'rxjs';

@Component({
  standalone:true,
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  imports:[IonicModule,BackButtonComponent,NgIf,NgFor]
})
export class ListPageComponent  implements OnInit {

  courseItem;
  chapterProcessing:boolean;
  @Input() openList='';
  @Input() listData;
  programId:string='5fa22b6f567a6400515f46c8';
  subjectId:string='5fa246cbd620930018804bc9';
  chapterList:Array<ChapterModal>=[];
  chapterQuery = {
    page: 1
  };

  constructor(private chapterService:ChapterService,
    private globalService:GlobalService) { }

  ngOnInit() {
    this.courseItem=history.state['course'];
    this.getChapters(this.chapterQuery);
  }

  async getChapters(query,event?){

    if (query.page === 1) {
      this.chapterList.splice(0);
      this.chapterProcessing = true;
    }

    const res= await lastValueFrom(this.chapterService.getChapters(this.programId,this.subjectId,query));
    let chapter=[];
     res['data'].forEach(item=> {
      chapter.push(new ChapterModal(item));
     });


     this.chapterList=[].concat(this.chapterList,chapter);
     console.log(this.chapterList);
  }
}
