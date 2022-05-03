
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { profilePageRoutingModule } from './profile-routing.module';

import { profilePage } from './profile.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    profilePageRoutingModule
  ],
  declarations: [profilePage]
})
export class profilePageModule {}
