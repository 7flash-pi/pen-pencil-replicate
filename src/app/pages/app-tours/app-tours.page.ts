import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-tours',
  templateUrl: './app-tours.page.html',
  styleUrls: ['./app-tours.page.scss'],
})
export class AppToursPage implements OnInit {

  btnText:string="App tours & offers";
  btnIcon:string="arrow-back-outline";
  defaultHref:string="home";

  constructor() { }

  ngOnInit() {
  }

}
