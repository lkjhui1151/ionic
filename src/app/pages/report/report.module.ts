import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { reportPage } from './report.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { reportPageRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    reportPageRoutingModule
  ],
  declarations: [reportPage]
})
export class reportPageModule {}
