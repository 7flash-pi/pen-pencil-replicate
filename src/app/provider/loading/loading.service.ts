import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading:any;

  constructor(private loadingCtrl:LoadingController) { }

 async showLoading(message){
  const loading= await this.loadingCtrl.create({
    message:message,
    spinner:'crescent',
    cssClass:'loading-css',
    keyboardClose:true,
    showBackdrop:true,
    duration:2000

  })
  loading.present();
 }
}
