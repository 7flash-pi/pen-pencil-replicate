import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TandcModalComponent } from 'src/app/component/tandc-modal/tandc-modal.component';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/provider/loading/loading.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm:FormGroup;
  phoneRegex:boolean=false;

  @Input() mobileNumber:number;
  @ViewChild('btnNext',{
    static:true
  }) btn:ElementRef;

  constructor(private router:Router,
    private globalService:GlobalService,
    private fb:FormBuilder,
    private modlctrl:ModalController,
    private loaderService:LoadingService) { }

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
  async gotoTandC(event,btn,tel){

    const modal= await this.modlctrl.create({
      component:TandcModalComponent,
      cssClass:'tandc-modal-Class',
      backdropDismiss: false,
      showBackdrop: true
    })
     modal.onDidDismiss().then(res =>{
      if(res && res['data']){
        this.registerUser(event,btn,tel);
      }
      else{
        this.btn.nativeElement.disabled=false;
        this.globalService.showToast('Please accept term and Condition to continue',1000,'bottom');
        console.log(this.btn.nativeElement);
      }
     })
    modal.present();
  }

 async  registerUser(event,btn,mobile?){

    const msg="coming soon";
    event.target.disabled=true;

    const user={
      mobile:mobile.value,
    };
    this.mobileNumber=this.signUpForm.value['mobile'];
    console.log(user);
    this.router.navigateByUrl('enter-otp',{ state: {  mobile:this.mobileNumber } });



  }
}
