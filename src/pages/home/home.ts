import { HomeModal } from './modal/home-modal';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private items: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.items = [];
  }


  public add() {
    let profileModal = this.modalCtrl.create(HomeModal, {});
    profileModal.present();
    profileModal.onDidDismiss(result => {
      if (result) {
        this.items.push({ key: result, value: false });
      }
    });
  }

  public clean() {
    this.items = this.items.filter(item => {
      return item.value === false;
    });
  }
}

