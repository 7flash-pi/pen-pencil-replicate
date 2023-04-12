import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent  implements OnInit {

  public cardData=[
    {
      plan:'Plan Zero',
       img:'assets/new_assets/free_pack/plan_zero.png' ,
       footer:'Free Pack 3.0',
       text:'(Prepare With us),',
       defaultHref:'plans',
     },

    {
      plan:'Plan A',
       img:'assets/cbs-nn/home_screen/plan_a.png',
       footer:'Crash Course 2.0',
       text:'(Exam Centric)',
       defaultHref:'course-select'},

    {
      plan:'Plan B',
      img:'assets/cbs-nn/home_screen/plan_b.png' ,
      footer:'Test Series 3.0',
      text:'(360° Approach  NORCET/NCLEX)',
      defaultHref:'#'},

    {
      plan:'Plan C+',
      img:'assets/cbs-nn/home_screen/plan_c.png' ,
      footer:'MasterMind 3.0',
      text:'(NORCET -Learn from the master)',
      defaultHref:'#' },

    {
      plan:'Plan UG',
      img:'assets/new_assets/plan_ug.png' ,
      footer:'Undergraduate',
      text:'(Undergraduate Master Pack)',
      defaultHref:'#'},

    {
      plan:'Plan MSc',
      img:'assets/cbs-nn/home_screen/plan_msc.png' ,
      footer:'MSc Entrance 2.0',
      text:'(The next level)',
      defaultHref:'#'},

    {
      plan:'Plan  NP',
      img:'assets/cbs-nn/home_screen/plan_np.png' ,
      footer:'NNL-VSL Pack',
      text:'(Nursing Procedures)',
      defaultHref:'#'},

    {
      plan:'Plan TH',
      img:'assets/cbs-nn/home_screen/plan_th.png' ,
      footer:'Target High',
      text:'(Enter Unique Code inside)',
      defaultHref:'#'},

    {
      plan:'Plan RRR',
      img:'assets/new_assets/rr/plan_rrr.png' ,
      footer:'Rapid Revision',
      text:'(Crack NORCET with Masterminds)',
      defaultHref:'#'},
  ]

  planName:any;

  constructor(private router:Router) { }

  ngOnInit() {}

  goToPlan(event,data?){
    this.planName=data;
    if(this.planName?.defaultHref === 'plans'){
      this.router.navigateByUrl(this.planName?.defaultHref,{ state: {  plan:this.planName} });

    }
    else if(this.planName?.defaultHref === 'course-select'){
      this.router.navigateByUrl(this.planName?.defaultHref,{ state: {  plan:this.planName} });
    }
  }

}
