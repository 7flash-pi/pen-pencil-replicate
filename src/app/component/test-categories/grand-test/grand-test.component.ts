import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-grand-test',
  templateUrl: './grand-test.component.html',
  styleUrls: ['./grand-test.component.scss'],
  imports:[IonicModule]
})
export class GrandTestComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
