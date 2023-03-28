import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referandwin',
  templateUrl: './referandwin.page.html',
  styleUrls: ['./referandwin.page.scss'],
})
export class ReferandwinPage implements OnInit {

  referNumber:number=9887654321;
  btnIcon="arrow-back-outline";
  btnText="Refer & earn";
  defaultHref="home";

  constructor() { }

  ngOnInit() {
  }

  copyReferalCode(){


  }

}
