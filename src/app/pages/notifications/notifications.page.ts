import { Component } from '@angular/core';
import { DatapassService } from './../../datapass.service';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class notificationsPage {

  constructor(private DatapassService:DatapassService) {}
  item:any

  ionViewWillEnter(){
    let dataArr = [{status:"เริ่มการทำงาน", details:"500"},{status:"หยุดการทำงาน", details:"600"}];
    this.item = dataArr
  }
}
