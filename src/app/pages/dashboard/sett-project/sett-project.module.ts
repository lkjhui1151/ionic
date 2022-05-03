import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettProjectPageRoutingModule } from './sett-project-routing.module';

import { SettProjectPage } from './sett-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettProjectPageRoutingModule
  ],
  declarations: [SettProjectPage]
})
export class SettProjectPageModule {}
