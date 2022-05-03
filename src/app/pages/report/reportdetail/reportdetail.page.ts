import { DatapassService } from './../../../datapass.service';
import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.page.html',
  styleUrls: ['./reportdetail.page.scss'],
})
export class ReportdetailPage implements OnInit {
  sendreportid:any;
  reportdetail:any=[];
  projectid:number;
  projectname:string;
  reaction_time:number;
  heating_rate:number;
  report_date:string;
  constructor(
    private modalController: ModalController,
    private DatapassService:DatapassService,
    private http:HttpClient
  ) {
    this.getreportid();
  }

  ngOnInit() {
    this.mycharts();
  }
  close() {
    this.modalController.dismiss();
  }
async getreportid() {
  this.sendreportid = this.DatapassService.sendreportid
    const url = `https://jookcafe.com/backend/api_reportid.php?reportid=${this.sendreportid}`;
    const response = await fetch(url);
    const result = await response.json();
    // console.log("test url" + url)
     this.projectid = result[0].projectid
     this.projectname = result[0].projectname
     this.reaction_time = result[0].reaction_time
     this.heating_rate = result[0].heating_rate
     this.report_date = result[0].report_date

    console.log("getreport api"+this.projectname)
} 



  
  mycharts() {

    var ctx = (<any>document.getElementById('canvas-chart-report-detail')).getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120"],

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
                  // This more specific font property overrides the global property
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
              display: true ,
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
              display: true ,
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
}
