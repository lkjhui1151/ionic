import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }
  dismissRegister() {
    this.modalController.dismiss();
  }
}
