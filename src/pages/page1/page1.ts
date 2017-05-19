import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { PageToPushPage } from "../page-to-push/page-to-push";

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  pushPage(localNavCtrl: boolean = false) {
    if (localNavCtrl) {
      this.navCtrl.push('PageToPushPage');
    } else {
      this.rootNavCtrl.push('PageToPushPage');
    }
  }

}
