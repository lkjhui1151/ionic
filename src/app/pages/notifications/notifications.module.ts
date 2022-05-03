import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { notificationsPage } from './notifications.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { notificationsPageRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: notificationsPage }]),
    notificationsPageRoutingModule,
  ],
  declarations: [notificationsPage]
})
export class notificationsPageModule {}
