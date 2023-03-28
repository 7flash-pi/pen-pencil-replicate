import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TandcModalComponent } from 'src/app/component/tandc-modal/tandc-modal.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;
  showpass:boolean;
  phoneNumber:number;
  password:number;
  phoneRegex:boolean=false;


  constructor(private router:Router,
              private modlctrl:ModalController,
              private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      mobile:[this.phoneNumber,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
      password:['',[Validators.required,Validators.maxLength(6)]]
    });
    console.log(this.loginForm);
  }

  checkphoneNumber(input){

    if(input.target && input.target.value ){
        this.phoneRegex = !!(input.target.value.match(/[6789]{1}[0-9]{9}/));     //   Match the beginning of the string
      }                                                                           //  [6789] Match a 6, 7, 8 or 9
      console.log(this.phoneRegex);                                                                          //   {1}  for 1st digit
                                                                              //   [0-9] any digit from 0 to 9
                                                                                  //    {9}   #Repeat the previous  9 times (9 digits)



  }


  gotosignup(){
    if( this.checkphoneNumber && this.password){
      console.log(this.phoneNumber,this.password);
    }

    this.router.navigate(['signup']);
  }

  async gotoTandC(){
    const modal=this.modlctrl.create({
      component:TandcModalComponent,
      cssClass:'tandc-modal-Class',
      backdropDismiss: false,
      showBackdrop: true
    })
    return await (await modal).present();
  }





}
