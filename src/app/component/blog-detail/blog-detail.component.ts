import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent  implements OnInit {

  btnIcon="arrow-back-outline";
  btntext="blog";
  defaultHref="guidance";


  constructor() { }

  ngOnInit() {}

}
