import {  ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TandcModalComponent } from 'src/app/component/tandc-modal/tandc-modal.component';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Platform } from '@ionic/angular';
import { LoadingService } from 'src/app/provider/loading/loading.service';
import { LoggedInService } from 'src/app/provider/afterLogin/logged-in.service';
import  { LoginService } from 'src/app/provider/login/login.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit ,OnDestroy {

  @ViewChild('btn',{
    static:true
  }) btn:ElementRef;

  loginForm:FormGroup;
  showpass:boolean=false;
  phoneNumber:number;
  platform:any;
  phoneRegex:boolean=false;



  constructor(private router:Router,
              private modlctrl:ModalController,
              private fb:FormBuilder,
              private gs:GlobalService ,
              private pf:Platform,
              private changeDetect:ChangeDetectorRef,
              private loading:LoadingService,
              private afterLogin:LoggedInService,
              private _login:LoginService,
              private menuctrl:MenuController ) {
                this.platform=this.pf;
              }

  ngOnInit() {
    this.menuctrl.enable(false);
    this.loginForm = this.fb.group({
      mobile:[this.phoneNumber,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
      password:['',[Validators.required,Validators.maxLength(6)]]
    });
  }

  ngOnDestroy(): void {
    this.menuctrl.enable(true);
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
        this.gs.showToast('Please accept term and Condition to continue',1000,'bottom');
        console.log(this.btn.nativeElement);
      }
     })
    modal.present();
  }

    async loginUser(event,btn){

        if(this.loginForm.value.mobile == '' || this.loginForm.value.password == '' ){
          this.gs.showToast('please fill empty fields',1000,'bottom');
          btn.disabled=false;
          return;
        }
        await this.loading.showLoading('Logging In.Please Wait...');

        try{
              const res=await this._login.login(this.loginForm.value).toPromise();
              if(res){
                await this.afterLogin.afterLoginProcess(res);
              }
            }
        catch (err) {
            console.log(err.message)
        }
        finally {
          event.target.disabled = false;
          if (btn) {
              btn.disabled = false;
          }
      }
    }




}
