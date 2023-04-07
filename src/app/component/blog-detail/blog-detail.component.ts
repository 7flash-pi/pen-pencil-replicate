import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
  standalone:true,
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class BlogDetailComponent  implements OnInit {

  btnIcon="arrow-back-outline";
  btntext="blog";
  defaultHref="guidance";


  constructor() { }

  ngOnInit() {}

}
