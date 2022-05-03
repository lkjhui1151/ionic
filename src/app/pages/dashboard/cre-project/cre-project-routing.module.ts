import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreProjectPage } from './cre-project.page';

const routes: Routes = [
  {
    path: '',
    component: CreProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreProjectPageRoutingModule {}
