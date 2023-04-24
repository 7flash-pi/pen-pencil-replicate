import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-pack-card',
  templateUrl: './pack-card.component.html',
  styleUrls: ['./pack-card.component.scss'],
  imports:[IonicModule]

})
export class PackCardComponent  implements OnInit {

  @Input() course;




  constructor() {

   }

  ngOnInit() {}

}
