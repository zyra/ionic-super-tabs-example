import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PageToPushPage} from "../page-to-push/page-to-push";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  pushPage() {
    this.rootNavCtrl.push(PageToPushPage);
  }

}
