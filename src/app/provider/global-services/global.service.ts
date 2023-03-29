import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor( private toast:ToastController) { }

  async showToast(message:string,duration,position,color?:string){
   const toast= await this.toast.create({
      message: message,
      position: position,
      duration: duration ? duration : 2000,
      color:color
    });
    toast.present();

  }
}
