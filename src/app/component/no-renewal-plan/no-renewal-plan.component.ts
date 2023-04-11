import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
  standalone:true,
  selector: 'app-no-renewal-plan',
  templateUrl: './no-renewal-plan.component.html',
  styleUrls: ['./no-renewal-plan.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class NoRenewalPlanComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
