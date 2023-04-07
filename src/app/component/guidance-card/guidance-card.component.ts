import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-guidance-card',
  templateUrl: './guidance-card.component.html',
  styleUrls: ['./guidance-card.component.scss'],
  imports:[IonicModule]

})
export class GuidanceCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}



}
