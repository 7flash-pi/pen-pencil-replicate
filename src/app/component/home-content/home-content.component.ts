import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent  implements OnInit {

  public cardData=[
    { plan:'Plan Zero', img:'assets/new_assets/free_pack/plan_zero.png' , footer:'Free Pack 3.0',text:'(Prepare With us)'},
    { plan:'Plan A', img:'assets/cbs-nn/home_screen/plan_a.png', footer:'Crash Course 2.0',text:'(Exam Centric)'},
    { plan:'Plan B', img:'assets/cbs-nn/home_screen/plan_b.png' , footer:'Test Series 3.0',text:'(360° Approach  NORCET/NCLEX)'},
    { plan:'Plan C+', img:'assets/cbs-nn/home_screen/plan_c.png' , footer:'MasterMind 3.0',text:'(NORCET -Learn from the master)'},
    { plan:'Plan UG', img:'assets/new_assets/plan_ug.png' , footer:'Undergraduate',text:'(Undergraduate Master Pack)'},
    { plan:'Plan MSc', img:'assets/cbs-nn/home_screen/plan_msc.png' , footer:'MSc Entrance 2.0',text:'(The next level)'},
    { plan:'Plan  NP', img:'assets/cbs-nn/home_screen/plan_np.png' , footer:'NNL-VSL Pack',text:'(Nursing Procedures)'},
    { plan:'Plan TH', img:'assets/cbs-nn/home_screen/plan_th.png' , footer:'Target High',text:'(Enter Unique Code inside)'},
    { plan:'Plan RRR', img:'assets/new_assets/rr/plan_rrr.png' , footer:'Rapid Revision',text:'(Crack NORCET with Masterminds)'},
  ]

  constructor() { }

  ngOnInit() {}

}
