import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { NavController,AlertController } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatapassService {
  public creproject:any;
  public creprojectid:any;
  public report:any;
  public sendreportid:any;
  constructor(public http:HttpClient,public navCtrl:NavController,public router:Router) { }

  listProjects(){
    let url = "http://localhost:8081/project"
    return this.http.get(url)
  }

  delete_Project(id){
    let url = "http://localhost:8081/delete_project"
    return this.http.post(url,{data:JSON.stringify(id)})
  }

  addProjects(dataset){
    let url = "http://localhost:8081/create_project"
    return this.http.post(url,{data:JSON.stringify(dataset)},{headers:new HttpHeaders({'Content-Type':'application/json'})}).subscribe((res:any)=>{
      console.log("ERROR === ",res);
    },(error:any)=>{
      console.log("SUCCESS === ",error);
      this.creproject = null
    })
  }

  status(data){
    let url = "http://localhost:8081/status"
    return this.http.post(url,{data:JSON.stringify(data)})
  }
}
