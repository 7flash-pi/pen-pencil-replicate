import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { McqModel } from 'src/app/provider/base/base.model';
import { McqService } from 'src/app/provider/mcq-service/mcq.service';

@Component({
  selector: 'app-qotd',
  templateUrl: './qotd.page.html',
  styleUrls: ['./qotd.page.scss'],
})
export class QotdPage implements OnInit {

  correctAns:boolean=false;
  mcqQues:McqModel;
  isSelected:boolean;
  constructor(private mcq:McqService) { }

  ngOnInit() {
    console.log(this.correctAns);
    this.getMcq();
  }

  async getMcq(){

    try{

      const res = await lastValueFrom(this.mcq.getMCQs());
      let mcqData:McqModel;

      if(res && res['data']){

          mcqData= {
            ...res['data']['details']
          }
      }
      this.mcqQues= {
        ...mcqData,
      }
      console.log(this.mcqQues)
    }
    catch (error){
      console.log(error.message);
    }

  }
  selectedOption(item){

  }
}
