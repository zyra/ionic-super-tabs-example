import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Page3Page} from "../page3/page3";

/*
  Generated class for the Page1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  pushPage() {
    this.navCtrl.push(Page3Page);
  }

}
