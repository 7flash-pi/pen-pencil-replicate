import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-tandc-modal',
  templateUrl: './tandc-modal.component.html',
  styleUrls: ['./tandc-modal.component.scss'],
  imports:[IonicModule]
})
export class TandcModalComponent  implements OnInit {

  checked:boolean=false;

  constructor( private modalctrl:ModalController) { }

  ngOnInit() {}

  close(){
    this.modalctrl.dismiss(this.checked);
  }

  handleChange(event){
    this.checked=event.detail.checked;
  }

}
