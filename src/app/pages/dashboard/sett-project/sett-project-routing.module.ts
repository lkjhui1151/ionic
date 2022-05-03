import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettProjectPage } from './sett-project.page';

const routes: Routes = [
  {
    path: '',
    component: SettProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettProjectPageRoutingModule {}
