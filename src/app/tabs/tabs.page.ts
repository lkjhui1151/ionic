import { Component } from '@angular/core';
import { DatapassService } from './../datapass.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private DatapassService:DatapassService) {}

  item:any

  OnInit(){
    let dataArr = [{status:"เริ่มการทำงาน", details:"500"},{status:"หยุดการทำงาน", details:"600"}];
    this.item = dataArr
  }
}
