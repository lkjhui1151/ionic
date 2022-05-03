import { element } from 'protractor';
import { async } from '@angular/core/testing';
import { DatapassService } from './../../../datapass.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { __values } from 'tslib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sett-project',
  templateUrl: './sett-project.page.html',
  styleUrls: ['./sett-project.page.scss'],
})
export class SettProjectPage {
  framework = '' ;
  projectid:any;
  apiprojectid:any;
  check_projectid:Number;
  projectname:any;
  selector : ['',''];
  weight:any;
  tmp:any;
  creproject:any[];  
  constructor(
    private pickerCtrl: PickerController,
    private modalController: ModalController,
    private navCtrl: NavController,
    private DatapassService:DatapassService,
    private http: HttpClient
    ) { 
     
       (async() => {
         async function getprojectid() {
           const url = `https://jookcafe.com/backend/api_report.php`;
           const response = await fetch(url);
           const result = await response.json();
           return result;
          
         }
         const projectid = await getprojectid();
         projectid.forEach(element => {
           console.log(`${element.projectname}`)
         });


         const array=[];
         for (let i = 0; i < projectid.length; i++) {
          array.push(projectid[i])
          this.creproject = array;
         
         }

         const output = this.creproject.map(({projectid,projectname}) =>
         ({projectid, 
          projectname})
         )
          console.log(output)
       })();





      // this.projectid = this.DatapassService.creprojectid;
      


      // const my_url = 'https://jookcafe.com/backend/api_creproject.php';
      // this.http.get(my_url).subscribe(data => {
      //   // this.apiprojectid[0].id
      //   this.check_projectid = parseInt(data[0].id)
      //   console.log("projectid  ="+this.projectid)
      //   console.log("checkprojectid  ="+this.check_projectid)
       
  
      //   if(this.projectid = this.check_projectid){
      //     console.log("Check Pass")
      //     this.creproject = this.DatapassService.creproject
      //     console.log(this.creproject)
          
      //   }else{
      //     console.log("Check fail projectid = " +this.check_projectid
                      
      //     )
          
      //   }
      // })
      

  }
  ngOnInit() {
    //Some data that came from the main page
    
}


    // Dismiss Register Modal
    dismisscreproject() {
      this.modalController.dismiss();
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
          console.log('data', data);
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

  // async showBasicPicker(){
  //   let opts: PickerOptions = {
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancle'
  //       },
  //       {
  //         text: 'Done',
  //         role: 'done'
  //       }
  //     ],
  //     columns: [
  //         {
  //           name: 'framework',
  //           options: [
  //             {text: 'test1', value: 'A'},
  //             {text: 'test2', value: 'b'},
  //             {text: 'test3', value: 'c'},
  //           ]
  //         }
  //     ]
  //   };
  //   let picker = await this.pickerCtrl.create(opts);
  //   picker.present();
  //   picker.onDidDismiss().then(async data => {
  //     let col = await picker.getColumn('framework');
      // console.log('col: ', col);
  //     this.framework = col.options[col.selectedIndex].text;
  //   })
  // }

}
