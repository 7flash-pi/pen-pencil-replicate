import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone:true,
  selector: 'app-plan-zero',
  templateUrl: './plan-zero.component.html',
  styleUrls: ['./plan-zero.component.scss'],
  imports:[IonicModule,CommonModule]
})
export class PlanZeroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  courseList = [
    {
        imageUrl: 'assets/new_assets/free_pack/olympiad.png',
        name: 'Nursing Olympiad',
        url: 'free-pack/nursing-olympiad',
        order: '04',
        type: '',
        desc: `Weekly Test to win Scholarship`
    },
    {
        imageUrl: 'assets/new_assets/free_pack/test.png',
        name: 'Daily Live Test',
        url: '/test-categories',
        order: '04',
        type: 'subjectWiseTest',
        desc: `Practice everyday to crack NORCET`
    },
    {
        imageUrl: 'assets/new_assets/free_pack/pencil.png',
        name: 'Revision Notes for LMR',
        url: '/list-page',
        order: '01',
        type: 'videoLecture',
        desc: ''
    },
    {
        imageUrl: 'assets/new_assets/free_pack/most_recent.png',
        name: 'Most Recent & Previous Years’ Papers',
        url: '/list-page',
        order: '03',
        type: 'prevPaper',
        desc: ''
    },

];

}
