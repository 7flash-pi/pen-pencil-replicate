import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TandcModalComponent } from 'src/app/component/tandc-modal/tandc-modal.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  showpass:boolean=false;
  @Input() phoneNumber:number;
  @Input() password:number;

  constructor(private router:Router,
              private modlctrl:ModalController) { }

  ngOnInit() {
  }

  checkphoneNumber():boolean{
    if(this.checkphoneNumber.length > 10){
      return true;
    }
      return false;
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
      cssClass:'tandc-modal-Class'
    })
    return await (await modal).present();
  }




}
