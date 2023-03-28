import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdl',
  templateUrl: './sdl.page.html',
  styleUrls: ['./sdl.page.scss'],
})
export class SdlPage implements OnInit {

  btnIcon="arrow-back-outline";
  btnText="back";
  defaultHref="home";


  constructor() { }

  ngOnInit() {
  }

}
