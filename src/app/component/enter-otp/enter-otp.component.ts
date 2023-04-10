import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  standalone:true,
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class EnterOtpComponent  implements OnInit {

  mobileNumber:string;
  otp:number;
  time:120;
  showtimer:boolean=false;

  constructor(private globalService:GlobalService,
    private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.mobileNumber=history.state['mobile'];
    this.startTimer();
    this.cdr.detectChanges();
  }

  startTimer(){
    this.showtimer=true;
    const interval= setInterval( () =>{
      if(this.time){
        this.time--;
      }
      if(this.time < 1){
        clearInterval(interval);
      }
    },1000);
  }


}
