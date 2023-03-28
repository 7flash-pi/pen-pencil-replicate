import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tandc-modal',
  templateUrl: './tandc-modal.component.html',
  styleUrls: ['./tandc-modal.component.scss'],
})
export class TandcModalComponent  implements OnInit {

  checked:boolean=false;

  constructor( private modalctrl:ModalController) { }

  ngOnInit() {}

  close(){
    this.checked=true;
    this.modalctrl.dismiss();
  }

}
