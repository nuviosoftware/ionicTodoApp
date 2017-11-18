import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'home-modal',
  templateUrl: 'home-modal.html'
})
export class HomeModal {

  public taskName: string;

  constructor(public viewCtrl: ViewController) {
  }

  public confirm() {
    this.closeModal(this.taskName);
  }

  public cancel() {
    this.closeModal();
  }

  private closeModal(value?: string) {
    this.viewCtrl.dismiss(value);
  }

}