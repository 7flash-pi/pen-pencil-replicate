import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Smart digital library', url: 'sdl', img: 'assets/icons/sdl.png' },
    { title: 'My Package', url: 'pages/home', img: 'assets/cbs-nn/hamburger/my_package.svg' },
    { title: 'Guidance and Counseling', url: 'guidance', img: 'assets/cbs-nn/hamburger/planet.svg' },
    { title: 'Success Stories', url: '#', img: 'assets/cbs-nn/hamburger/microphone.svg' },
    { title: 'Scholarship Test (NSA/MAT/SAT)', url: '#', img: 'assets/icons/test.png' },
    { title: 'Downloaded Videos', url: 'downloaded', img: 'assets/icons/download.svg' },
    { title: 'Downloaded videos Batch', url: 'downloaded', img: 'assets/icons/download.svg' },
    { title: 'Downloaded PDFs', url: 'downloaded', img: 'assets/icons/download.svg' },
    { title: 'Bookmark', url: '#', img: 'assets/cbs-nn/hamburger/bookmark.svg' },
    { title: 'Vacancy Management', url: '#', img: 'assets/icons/Icon-material-announcement.png'},
    { title: 'FAQ', url: '#', img: 'assets/cbs-nn/hamburger/faq.svg' },
    { title: 'About Nursing Next Live', url: '#', img: 'assets/cbs-nn/hamburger/about.svg' },
    { title: 'Resume Where You Left ', url: '#', img: 'assets/icons/resume-where-left.png' },
    { title: 'About Latest Version', url: '#', img: 'assets/cbs-nn/hamburger/version.png' },
    { title: 'Renew & Upgrade Package', url: '#', img: 'assets/cbs-nn/hamburger/recycle.svg' },
    { title: 'Refer & Win', url: 'referandwin', img: 'assets/cbs-nn/hamburger/refer.svg' },
    { title: 'Our Associates', url: '#', img: 'assets/cbs-nn/hamburger/associates.svg' },
    { title: 'Term & Policy', url: '#', img: 'assets/cbs-nn/hamburger/accept.svg' },
    { title: 'Logout', url: 'login', img: 'assets/cbs-nn/hamburger/logout.svg' }

  ];

  nightMode:boolean=false;
  constructor(private router:Router) {}

  gotomypackage(){
    this.router.navigate(['home']);
  }

  gotosmd(){
    this.router.navigate(['smd']);
  }
}
