import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qotd',
  templateUrl: './qotd.page.html',
  styleUrls: ['./qotd.page.scss'],
})
export class QotdPage implements OnInit {

  correctAns:boolean=false;
  constructor() { }

  ngOnInit() {
    console.log(this.correctAns);
  }

}
