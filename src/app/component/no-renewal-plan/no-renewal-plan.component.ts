import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-no-renewal-plan',
  templateUrl: './no-renewal-plan.component.html',
  styleUrls: ['./no-renewal-plan.component.scss'],
  imports:[IonicModule]
})
export class NoRenewalPlanComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
