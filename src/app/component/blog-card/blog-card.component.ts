import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  imports:[IonicModule]
})
export class BlogCardComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  gotoBlogdetail(){
    this.router.navigate(['guidance/blog/blogDetail']);
  }
}
