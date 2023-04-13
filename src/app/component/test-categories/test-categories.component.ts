import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SubjectTestComponent } from './subject-test/subject-test.component';
import { GrandTestComponent } from './grand-test/grand-test.component';

@Component({
  standalone:true,
  selector: 'app-test-categories',
  templateUrl: './test-categories.component.html',
  styleUrls: ['./test-categories.component.scss'],
  imports:[IonicModule,BackButtonComponent,CommonModule,SubjectTestComponent,GrandTestComponent]
})
export class TestCategoriesComponent  implements OnInit {

  subjectActiveCard=true;
  grandCard=false;

  constructor(private router:Router) { }

  ngOnInit() {}

  openSubjectTestCard(){
    this.subjectActiveCard=true;
    this.grandCard=false;

  }
  openGrandTestCard(){
    this.grandCard=true;
    this.subjectActiveCard=false;
  }
}
