import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportdetailPageRoutingModule } from './reportdetail-routing.module';

import { ReportdetailPage } from './reportdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportdetailPageRoutingModule
  ],
  declarations: [ReportdetailPage]
})
export class ReportdetailPageModule {}
