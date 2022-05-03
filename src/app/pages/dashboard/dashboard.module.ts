

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dashboardPage } from './dashboard.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { dashboardPageRoutingModule } from './dashboard-routing.module';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { CountdownModule } from 'ngx-countdown';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    dashboardPageRoutingModule,
    RoundProgressModule,
    CountdownModule,
    NgCircleProgressModule.forRoot(),
    
  
  ],
  declarations: [dashboardPage]
})
export class dashboardPageModule {}
