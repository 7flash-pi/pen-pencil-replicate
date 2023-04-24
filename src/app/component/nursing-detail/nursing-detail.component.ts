import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
  standalone:true,
  selector: 'app-nursing-detail',
  templateUrl: './nursing-detail.component.html',
  styleUrls: ['./nursing-detail.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class NursingDetailComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


}
