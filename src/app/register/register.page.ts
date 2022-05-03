

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { HomePage } from '../home/home.page';

import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private modalController: ModalController,

    private navCtrl: NavController,

    private menu: MenuController,
  ) { }

  ngOnInit() {
  }

  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }

}
