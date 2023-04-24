import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';
import { TopicModal } from 'src/app/provider/base/base.model';
import { TopicsService } from 'src/app/provider/topics-service/topics.service';

@Component({
  standalone:true,
  selector: 'app-list-inside',
  templateUrl: './list-inside.component.html',
  styleUrls: ['./list-inside.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class ListInsideComponent  implements OnInit {

  listData:any;
  topicList:Array<TopicModal>=[];

  constructor(
    private router:Router,
    private topicsService:TopicsService
  ) { }

  ngOnInit() {
    this.listData=history.state['listData'];


  }

  async getTopics(query,$event?){

    const res=this.topicsService.getTopics(this.listData?.programId,this.listData?.subject?._id,this.listData?._id,query);

    console.log(res['data']);


  }

}
