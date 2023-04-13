import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../../back-button/back-button.component';

@Component({
  standalone:true,
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class ListPageComponent  implements OnInit {

  courseItem;

  constructor() { }

  ngOnInit() {
    this.courseItem=history.state['course'];
    console.log(this.courseItem);
  }

}
