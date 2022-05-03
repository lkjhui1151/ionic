import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreProjectPageRoutingModule } from './cre-project-routing.module';

import { CreProjectPage } from './cre-project.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreProjectPageRoutingModule,
  ],

  declarations: [CreProjectPage]
})
export class CreProjectPageModule {}
