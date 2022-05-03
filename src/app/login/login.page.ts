import { ForgotPasswordPage } from './../forgot-password/forgot-password.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  async forgetpassword() {
    const forgetpasswordModal = await this.modalController.create({
      component: ForgotPasswordPage,
    });
    return await forgetpasswordModal.present();
  }
}
