import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidancePage } from './guidance.page';
import { BlogCardComponent } from 'src/app/component/blog-card/blog-card.component';
import { GuidanceCardComponent } from 'src/app/component/guidance-card/guidance-card.component';
import { BlogDetailComponent } from 'src/app/component/blog-detail/blog-detail.component';


const routes: Routes = [
  {
    path: '',
    component: GuidancePage
  },
  {
    path: 'blog',
    component:BlogCardComponent
  },
  {
    path: 'guidance',
    component:GuidanceCardComponent
  },
  {
    path:'blog/blogDetail',
    component:BlogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidancePageRoutingModule {}
