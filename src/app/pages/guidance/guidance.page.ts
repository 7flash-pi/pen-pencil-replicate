import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.page.html',
  styleUrls: ['./guidance.page.scss'],
})
export class GuidancePage implements OnInit {


  public btnIcon="arrow-back-outline";
  defaultHref="home";
  openCard:boolean=true;
  openBlog:boolean=false;

  constructor() { }

  router=inject(Router);


  ngOnInit() {
  }

  openGuideCard(){
    this.openCard=true;
    this.openBlog=false;
  }
  openBlogCard(){
    this.openBlog=true;
    this.openCard=false;
  }
}
