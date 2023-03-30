import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading:any;
  private content:string;

  constructor(private loading:LoadingController) { }

 async showLoading(message){

  this.content=message;
  const loading= await this.loading.create({
    message:message,
    spinner:'crescent',
    cssClass:'loading-css',
    keyboardClose:true,
    showBackdrop:true,
    duration:2000

  })
  loading.present();
 }
 async unloadData(message?) {
  if (this.loading != null) {
      await this.loading.dismiss().then(() => {
          this.loading = null;
      }).catch(e => console.log(e));


      this.content = '';
  }
}
}
