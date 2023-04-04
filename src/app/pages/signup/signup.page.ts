import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/global-services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  phoneRegex:boolean=false;
  mobileNumber:number;

  constructor(private router:Router,
    private globalService:GlobalService) { }

  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigate(['login']);
  }

  checkphoneNumber(input){
    if(input.target && input.target.value ){
        this.phoneRegex = !!(input.target.value.match(/[6789]{1}[0-9]{9}/));
      }
      if(input.target && input.target.value.length === 10 ){
        if(this.phoneRegex){
          input.target.blur();
        }
        else{
          this.globalService.showToast('Please enter a valid PhoneNumber',2000,'bottom');

        }
      }
  }

}
