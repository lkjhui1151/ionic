import { DatapassService } from './../../datapass.service';
import { ReportdetailPage } from './reportdetail/reportdetail.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { HttpClientModule , HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss']
})
export class reportPage {
  apireportid:any[] = [];
  datareport:any;
  public data:any;
  project:any
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private navCtrl: NavController,
    private DatapassService:DatapassService,
    private http:HttpClient
    ) {
    this.getreportapi();
  }

  async showreportdetail(id:number) {
    this.DatapassService.sendreportid = id;
    console.log("send report id =" + this.DatapassService.sendreportid)
    const ReportdetailPageModule = await this.modalController.create({
      component: ReportdetailPage
    });
    return await ReportdetailPageModule.present();
  }


  OnInit(){
    this.getreportapi()
  }

  async getreportapi(){
    this.DatapassService.listProjects().subscribe((res:any)=>{
      console.log("SUCCESS === ",res);
      this.project = res;
    },(error:any)=>{
      console.log("ERROR === ",error);
    })
  }

  // async getreportapi(){
    //     const url = `http://jookcafe.com/backend/api_report.php`;
    //     const response = await fetch(url);
    //     const result = await response.json();

    //     console.log(result)
    //     this.datareport = result;
    //     this.DatapassService.report = this.datareport

    //   }

    ionViewWillEnter(){
      this.getreportapi();
    }
    reportdetail_del(id:number){
      Swal.fire({
        title: 'คุณต้องการลบโปรเจ็กต์นี้หรือไม่',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
      }).then((result) => {
        if (result.isConfirmed) {
          this.DatapassService.delete_Project(id).subscribe((res:any)=>{
            console.log("SUCCESS === ",res);
            this.getreportapi()
          },(error:any)=>{
            console.log("ERROR === ",error);
          })
          Swal.fire(
            'ลบโปรเจ็กต์เรียบร้อยแล้ว',
            '',
            'success'
            )
        }
      })
    }
  } 
