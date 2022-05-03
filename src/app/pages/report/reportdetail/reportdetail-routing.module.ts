import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportdetailPage } from './reportdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ReportdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportdetailPageRoutingModule {}
