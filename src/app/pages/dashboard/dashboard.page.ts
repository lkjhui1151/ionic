import { CircleProgressComponent, CircleProgressOptions } from 'ng-circle-progress';

import { HttpClientModule , HttpClient } from '@angular/common/http';
import { DatapassService } from './../../datapass.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { CreProjectPage } from '../dashboard/cre-project/cre-project.page';
import { SettProjectPage } from '../dashboard/sett-project/sett-project.page'
import Swal from 'sweetalert2';
import { Chart } from 'chart.js';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { on, title } from 'process';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-tab1',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class dashboardPage implements OnInit {
  @ViewChild('countdown', { static: false }) private countdown: CountdownComponent;
  @ViewChild('circleProgress') circleProgress: CircleProgressComponent;
  timeData = "0"
  checked: boolean = false;
  status_checked: string = "OFF";
  cre_project:any;
  dataitem:any = {};
  temp = 0;
  temp_line = '';


  projectid:any;
  projectname:any; 
  hours:any;
  min:any;
  sum_min:any;
  sec:any;
  weight:any;
  temp_limit:any;
  temp_start:any;
  date:any;


  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private menu: MenuController,
    private ActivatedRoute:ActivatedRoute,
    private DatapassService:DatapassService,
    private http:HttpClient
    ) {
    this.check_status();
    setInterval(function update(){ 

    }, 1000);

    if (this.temp >= 80 ) {
      this.temp_line = '#ff0000';
    }else if (this.temp >= 60) {
      this.temp_line = '#ff6f00';
    }else{
      this.temp_line = '#78C000';
    }
  }

  ionViewWillEnter(){
    this.check_status();
  }

  check_status(){
    this.cre_project = this.DatapassService.creproject;
    console.log("this is dashboard :",this.cre_project)
    let status_creproject = this.cre_project
    if (status_creproject != undefined) {
      this.projectname = this.cre_project.projectname;
      this.hours = this.cre_project.hours;
      this.min = this.cre_project.min;
      this.sum_min = this.cre_project.sum_min;
      this.sec = this.cre_project.sec;
      this.weight = this.cre_project.weight;
      this.temp_limit = this.cre_project.temp_limit;
      this.temp_start = this.cre_project.temp_start;
      this.date = this.cre_project.date;
    }else{
      console.log('Dashboard: Dont project')
    }
  }
  
  ngOnInit() {
    // location.reload();
    this.check_status();
    this.mycharts();
    // this.cre_project = this.DatapassService.creproject;
    // var status_creproject = this.cre_project
    // if (status_creproject != undefined) {
      //     console.log('Dashboard: Datapass')
      //     this.projectid = this.cre_project.projectid;
      //     this.projectname = this.cre_project.projectname;
      //     var hours = this.cre_project.hours;
      //     var min = this.cre_project.min;
      //     var sum_min = this.cre_project.sum_min;
      //     var sec = this.cre_project.sec;
      //     var weight = this.cre_project.weight;
      //     var temp_limit = this.cre_project.temp_limit;
      //     var temp_start = this.cre_project.temp_start;
      //     var date = this.cre_project.date;
      //   }else{
        //       console.log('Dashboard: Dont project')
        //     }
      }
      saveproject() {
        let dataset_all ={
          name:this.projectname,
          hourns:this.hours,
          minute:this.min,
          weight:this.weight,
          temperature:this.temp_limit,
          working:this.temp_start,
        }
        this.DatapassService.addProjects(dataset_all)
        this.projectname = null
        this.hours = null
        this.min = null
        this.sum_min = null
        this.sec = null
        this.weight = null
        this.temp_limit = null
        this.temp_start = null
        this.date = null
        this.timeData = "0"
      }

      handleEvent(event) {
        if (event.action === 'notify') {
          console.log('Hi!');
        }
      }

      pause() {
        this.countdown.pause();
      }

      start() {
        this.countdown.begin();
      }

      Clicked() {
        if (this.sec != null){
          if (this.checked = !this.checked) {
            this.status_checked = "ON";
            this.timeData = this.sec;
            this.countdown.begin();
            this.DatapassService.status(this.status_checked).subscribe((res:any)=>{
              console.log("SUCCESS === ",res);
            },(error:any)=>{
              console.log("ERROR === ",error);
            })
          } else {
            this.status_checked = "OFF";
            this.countdown.pause();
            this.DatapassService.status(this.status_checked).subscribe((res:any)=>{
              console.log("SUCCESS === ",res);
            },(error:any)=>{
              console.log("ERROR === ",error);
            })
          }
        }else{
          Swal.fire({
            title: "อุ๊ปส์!",
            text: "คุณไม่มีการสร้างโปรเจค",
            icon: 'info',
            confirmButtonText: 'ตกลง'
          })
        }
      }

      cd() {
        var cd: number = 10
        return cd
      }

      mycharts() {
        var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
            labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70", "80", "90", "100", "110"],

            datasets: [{
              label: "CHART",
              color: "#FFFFFF",
              backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              ],
              data: ["0", "25", "25", "30", "35", "37", "45", "46", "49", "50", "50", "50", "50", "55", "70", "70", "70", "75", "90", "95", "100", "105", "110", "105", "107"],
              borderWidth: 3,
            },
            {
              label: "Limit",
              borderColor: [
              '#FFFF00'
              ],
              data: ["110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110", "110"],
              borderWidth: 1,
            },

            ]
          },
          options: {
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 100
                  }
                }
              }
            },
            scales: {
              yAxes: [{

                display: true,
                gridLines: {
                  display: true,
                  color: "#ffffff21"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Temp(°C)',
                  fontColor: 'white',
                  fontSize: 14,

                },
                ticks: {
                  beginAtZero: true,
                  fontSize: 20,
                  // fontStyle: 'bold',
                  title: 'Temp',
                  borderColor: 'rgb(255,255,255)'
                }
              }],
              xAxes: [{
                display: true,
                gridLines: {
                  display: true,
                  color: "#ffffff21"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Time(Min)',
                  fontColor: 'white',
                  fontSize: 14,

                },
                ticks: {
                  fontSize: 20,
                  // fontStyle: 'bold'
                }
              }],

            },
          }
        }
        );
      }

      del_project(projectname:string) {
        if(this.status_checked == "ON"){
          Swal.fire({
            title: "อุ๊ปส์!",
            text: "กรุณาสั่งหยุดการทำงาน",
            icon: 'info',
            confirmButtonText: 'ตกลง'
          })
        }else{
          if( projectname == null){
            Swal.fire({
              title: "อุ๊ปส์!",
              text: "คุณไม่มีการสร้างโปรเจค",
              icon: 'info',
              confirmButtonText: 'ตกลง'
            })
          }else{
            Swal.fire({
              title: 'คุณต้องการลบโปรเจคนี้หรือไม่',
              text: "",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#28a745',
              cancelButtonColor: '#d33',
              confirmButtonText: 'ตกลง',
              cancelButtonText: 'ยกเลิก',
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: 'ต้องการบันทึก report หรือไม่',
                  text: "",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#28a745',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'บันทึก',
                  cancelButtonText: 'ไม่บันทึก',
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.saveproject()
                    Swal.fire(
                      'ลบโปรเจคสำเร็จ',
                      '',
                      'success'
                      )
                  } else {
                    Swal.fire(
                      'ลบโปรเจคสำเร็จ',
                      '',
                      'success'
                      )
                    this.projectname = null
                    this.hours = null
                    this.min = null
                    this.sum_min = null
                    this.sec = null
                    this.weight = null
                    this.temp_limit = null
                    this.temp_start = null
                    this.date = null
                    this.timeData = "0"
                    this.DatapassService.creproject = null
                  }
                })
              }
            })
          }
        }
      }
      goto_creproject(){
        this.navCtrl.navigateForward('app/tabs/dashboard/cre-project')
      }
      async settproject() {
        const SettProjectPageModule = await this.modalController.create({
          component: SettProjectPage,
        });
        return await SettProjectPageModule.present();
      }
    }