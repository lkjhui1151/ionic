import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { NavController,AlertController } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient,public navCtrl:NavController,public router:Router) { }

    listProjects(){
    let url = "http://localhost:8081/project"
    return this.http.get(url)
  }
}
