import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-downloaded',
  templateUrl: './downloaded.page.html',
  styleUrls: ['./downloaded.page.scss'],
})
export class DownloadedPage implements OnInit {

  btnIcon="arrow-back-outline";
  defaultHref="home";

  constructor() { }

  ngOnInit() {
  }

}
