import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/global-services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm:FormGroup;
  phoneRegex:boolean=false;

  mobileNumber:number;
  @ViewChild('btnNext',{
    static:true
  }) btn:ElementRef;

  constructor(private router:Router,
    private globalService:GlobalService,
    private fb:FormBuilder) { }

  ngOnInit() {

    this.signUpForm=this.fb.group({
      mobile:[this.mobileNumber,[Validators .required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/[6789]{1}[0-9]{9}/)
      ]]
    })
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
          this.signUpForm.reset();

        }
      }
  }

}
