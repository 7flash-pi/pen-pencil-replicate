import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrls: ['./subject-test.component.scss'],
  imports:[IonicModule]
})
export class SubjectTestComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
