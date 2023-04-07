import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
  imports:[BackButtonComponent,IonicModule,FormsModule,CommonModule]
})
export class SearchModalComponent  implements OnInit {

  btnIcon = "arrow-back-outline";
  btnText = "Search";
  defaultHref = "home";

  @Input() searchInput="";

  micOn:boolean=true;
  noContent:string="";

  constructor(private router:Router,
              private modalCtrl:ModalController) { }

  ngOnInit() {}

  switchMic(){
    this.micOn= !this.micOn;
  }
  searchContent(){
    if(!this.searchInput){
      this.noContent="No content found .Try Something different";
    }
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
