import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.page.html',
  styleUrls: ['./guidance.page.scss'],
})
export class GuidancePage implements OnInit {


  public btnIcon="arrow-back-outline";
  defaultHref="home";
  openCard:boolean=false;
  openBlog:boolean=false;

  constructor(private router:Router,
              private route:ActivatedRoute) { }

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
