import {  ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TandcModalComponent } from 'src/app/component/tandc-modal/tandc-modal.component';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('btn',{
    static:true
  }) btn:ElementRef;

  loginForm:FormGroup;
  showpass:boolean;
  phoneNumber:number;
  platform:any;
  phoneRegex:boolean=false;



  constructor(private router:Router,
              private modlctrl:ModalController,
              private fb:FormBuilder,
              private gs:GlobalService ,
              private pf:Platform,
              private changeDetect:ChangeDetectorRef
              ) {
                this.platform=this.pf;
              }

  ngOnInit() {
    this.loginForm = this.fb.group({
      mobile:[this.phoneNumber,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
      password:['',[Validators.required,Validators.maxLength(6)]]
    });
    console.log(this.loginForm);
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
          this.gs.showToast('Please enter a valid PhoneNumber',2000,'bottom');
          this.loginForm.reset();
        }
      }

      this.detectChange();
}

  detectChange(){
    if (this.platform.is('hybrid')) {
      this.changeDetect.detach();
      this.changeDetect.detectChanges();
      this.changeDetect.reattach();
  }
  }




  gotosignup(){

    this.router.navigate(['signup']);
  }

  async gotoTandC(event,btn){
    const modal= await this.modlctrl.create({
      component:TandcModalComponent,
      cssClass:'tandc-modal-Class',
      backdropDismiss: false,
      showBackdrop: true
    })
     modal.onDidDismiss().then(res =>{
      if(res && res['data']){
        this.loginUser(event,btn)
      }
      else{
        this.btn.nativeElement.disabled=false;
        this.gs.showToast('Please accept term and Condition to continue',1000,'top','danger');
        console.log(this.btn.nativeElement);
      }
     })
    return modal.present();
  }

  loginUser(event,btn){
    console.log(event,btn);
  }




}
