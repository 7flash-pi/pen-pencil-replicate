import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  standalone:true,
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
  imports:[IonicModule]
})
export class HomeNavComponent  implements OnInit {

  constructor( private modalCtrl:ModalController,
                private router:Router) { }

  ngOnInit() {}
 async openSearch(){
    const modal= this.modalCtrl.create({
      component:SearchModalComponent,
      cssClass:'search-Modal-css'
    })
    return await (await modal).present();
  }

  openApptour(){
      this.router.navigate(['app-tours']);
    }

    openNotification(){
      this.router.navigate(['notifications'])
    }

}
