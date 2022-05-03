import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reportPage } from './report.page';

const routes: Routes = [
  {
    path: '',
    component: reportPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class reportPageRoutingModule {}
