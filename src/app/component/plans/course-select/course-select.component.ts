import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../../back-button/back-button.component';

@Component({
  standalone:true,
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class CourseSelectComponent  implements OnInit {
  plan:any;

  constructor() { }

  ngOnInit() {
    this.plan=history.state['plan'];
  }

}
