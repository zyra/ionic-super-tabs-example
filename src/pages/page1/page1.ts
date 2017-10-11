import { Component } from '@angular/core';
import {NavController, NavParams, IonicPage, LoadingController} from 'ionic-angular';
import { PageToPushPage } from "../page-to-push/page-to-push";

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  ionViewWillLoad() {
    console.log('[1] will load fired');
  }

  ionViewDidLoad() {
    console.log('[1] did load fired');
  }

  ionViewWillEnter() {
    console.log('[1] will enter fired');
  }

  ionViewDidEnter() {
    console.log('[1] did enter fired');
  }

  pushPage(localNavCtrl: boolean = false) {
    if (localNavCtrl) {
      this.navCtrl.push('PageToPushPage');
    } else {
      this.rootNavCtrl.push('PageToPushPage');
    }
  }

  showLoading() {
    this.loadingCtrl.create({
      duration: 1500,
      content: 'Loading ...'
    }).present();
  }

}
