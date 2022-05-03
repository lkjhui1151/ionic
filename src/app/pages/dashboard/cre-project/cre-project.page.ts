import { DatapassService } from './../../../datapass.service';
import { dashboardPage } from './../dashboard.page';
import { title } from 'process';
import { PickerController, AlertController, NavController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { __values } from 'tslib';
import Swal from 'sweetalert2';
import { Router,NavigationExtras } from '@angular/router'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cre-project',
  templateUrl: './cre-project.page.html',
  styleUrls: ['./cre-project.page.scss'],
})
export class CreProjectPage  {


  @ViewChild('input_projectname') s_projectname:ElementRef; 
  @ViewChild('input_hours') s_hours:ElementRef; 
  @ViewChild('input_min') s_min:ElementRef; 
  @ViewChild('input_weight') s_weight:ElementRef;
  @ViewChild('input_temp_limit') s_temp_limit:ElementRef;
  @ViewChild('input_temp_start') s_temp_start:ElementRef;




  projectname:any;
  selector = ['',''];
  hours:Number = 0;
  weight:any;
  temp_limit:any;
  temp_start:any;
  apiprojectid:any;
  projectid=[];
  


  constructor(
    private pickerCtrl: PickerController,
    private modalController: ModalController,
    public alertCtrl: AlertController,
    private navCtrl: NavController,
    private menu: MenuController,
    private DatapassService:DatapassService,
    private http: HttpClient
    ) { 



  }
  ngOnInit() {
    //Some data that came from the main page
    // this.getprojectid();
    // this.navCtrl.navigateForward('app/tabs/dashboard');

  }

  ionViewWillEnter(){
    // this.navCtrl.navigateForward('app/tabs/dashboard');
  }
  // async getprojectid(){
  //   const url = `http://jookcafe.com/backend/api_creproject.php`;
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   this.apiprojectid = result;
  //   var projectidstring;
  //   var projectid;
  //   for (let i = 0; i < this.apiprojectid.length; i++) {
  //     // projectid.push(this.apiprojectid[i].id);
  //     projectidstring = this.apiprojectid[i].id;
  //     projectid = parseInt(projectidstring)
  //     projectid = (projectid + 1);
  //     console.log("get project id = " + projectid)
  //     // console.log(typeof(projectid))
  //     this.DatapassService.creprojectid = projectid
  //   }
  // }
  

  cre_project(){
    var projectname = this.s_projectname.nativeElement.value
    var hours = this.selector[0]
    var min =this.selector[1]
    var weight_string = this.s_weight.nativeElement.value
    var temp_limit_string = this.s_temp_limit.nativeElement.value
    var temp_start_string = this.s_temp_start.nativeElement.value
    ///////////////////////////////////////////////////////
    console.log(projectname,hours,min,weight_string,temp_limit_string,temp_start_string)
    if (projectname == 0 && hours == "" && min == "" && weight_string == 0 && temp_limit_string == 0 && temp_start_string == 0){
      Swal.fire({
        icon: 'info',
        title: 'กรุณากรอกข้อมูลให้ครบ',
        showConfirmButton: false,
        timer: 1500,
      })
    }else if (projectname != 0 && hours != "" && min != "" && weight_string != 0 && temp_limit_string != 0 && temp_start_string != 0) {
      var projectname = projectname;
      var sec_hours = parseInt(hours);
      var sec_min = parseInt(min);
      var weight = parseInt(weight_string);
      var temp_limit = parseInt(temp_limit_string);
      var temp_start = parseInt(temp_start_string);
      var sum_min = (sec_hours * 60)+(sec_min);
      var sec = (sec_hours * 3600)+(sec_min * 60);
      var todayDate = new Date().toISOString().slice(0, 10);

      var cre_project = {
        projectid:this.DatapassService.creprojectid,
        projectname:projectname,
        hours:sec_hours,
        min:sec_min,
        sum_min:sum_min,
        sec: sec,
        weight:weight,
        temp_limit:temp_limit,
        temp_start:temp_start,
        date:todayDate
      }
      // let dataset_all ={
      //   name:projectname,
      //   hourns:sec_hours,
      //   minute:sec_min,
      //   weight:weight,
      //   temperature:temp_limit,
      //   working:temp_start,
      // }
      this.DatapassService.creproject = cre_project;
      // this.DatapassService.addProjects(dataset_all)
      this.navCtrl.navigateForward('app/tabs/dashboard');
    }
  }

  // Dismiss Register Modal
  dismisscreproject() {
    // this.modalController.dismiss();
    this.navCtrl.navigateForward('app/tabs/dashboard');
  }

  async showadvancePicker(){
    let opts: PickerOptions = {
      cssClass: 'academy-picker',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancle'
      },
      {
        text: 'Done',
        cssClass: 'special-done'
      }
      ],
      columns: [
      {
        name: 'Hours',
        options: [
        {text: 'Hours', value: ''},
        {text: '0', value: '0'},
        {text: '1', value: '1'},
        {text: '2', value: '2'},
        {text: '3', value: '3'},
        {text: '4', value: '4'},
        {text: '5', value: '5'},
        {text: '6', value: '6'},
        {text: '7', value: '7'},
        {text: '8', value: '8'},
        {text: '9', value: '9'},
        {text: '10', value: '10'},
        {text: '11', value: '11'},
        {text: '12', value: '12'},
        {text: '13', value: '13'},
        {text: '14', value: '14'},
        {text: '15', value: '15'},
        {text: '16', value: '16'},
        {text: '17', value: '17'},
        {text: '18', value: '18'},
        {text: '19', value: '19'},
        {text: '20', value: '20'},
        {text: '21', value: '21'},
        {text: '22', value: '22'},
        {text: '23', value: '23'},
        {text: '24', value: '24'}
        ]
      },
      {
        name: 'Min',
        options: [
        {text: 'Min', value: ''},
        {text: '0', value: '0'},
        {text: '1', value: '1'},
        {text: '2', value: '2'},
        {text: '3', value: '3'},
        {text: '4', value: '4'},
        {text: '5', value: '5'},
        {text: '6', value: '6'},
        {text: '7', value: '7'},
        {text: '8', value: '8'},
        {text: '9', value: '9'},
        {text: '10', value: '10'},
        {text: '11', value: '11'},
        {text: '12', value: '12'},
        {text: '13', value: '13'},
        {text: '14', value: '14'},
        {text: '15', value: '15'},
        {text: '16', value: '16'},
        {text: '17', value: '17'},
        {text: '18', value: '18'},
        {text: '19', value: '19'},
        {text: '20', value: '20'},
        {text: '21', value: '21'},
        {text: '22', value: '22'},
        {text: '23', value: '23'},
        {text: '24', value: '24'},
        {text: '25', value: '25'},
        {text: '26', value: '26'},
        {text: '27', value: '27'},
        {text: '28', value: '28'},
        {text: '29', value: '29'},
        {text: '30', value: '30'},
        {text: '31', value: '31'},
        {text: '32', value: '32'},
        {text: '33', value: '33'},
        {text: '34', value: '34'},
        {text: '35', value: '35'},
        {text: '36', value: '36'},
        {text: '37', value: '37'},
        {text: '38', value: '38'},
        {text: '39', value: '39'},
        {text: '40', value: '40'},
        {text: '41', value: '41'},
        {text: '42', value: '42'},
        {text: '43', value: '43'},
        {text: '44', value: '44'},
        {text: '45', value: '45'},
        {text: '46', value: '46'},
        {text: '47', value: '47'},
        {text: '48', value: '48'},
        {text: '49', value: '49'},
        {text: '50', value: '50'},
        {text: '51', value: '51'},
        {text: '52', value: '52'},
        {text: '53', value: '53'},
        {text: '54', value: '54'},
        {text: '55', value: '55'},
        {text: '56', value: '56'},
        {text: '57', value: '57'},
        {text: '58', value: '58'},
        {text: '59', value: '59'},
        {text: '60', value: '60'},
        ]
      },

      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      // console.log('data', data);
      let Hours = await picker.getColumn('Hours');
      let Min = await picker.getColumn('Min');

      this.selector = [
      Hours.options[Hours.selectedIndex].value,
      Min.options[Min.selectedIndex].value
      ]
    });
  }

  getvalue(){

  }

}
