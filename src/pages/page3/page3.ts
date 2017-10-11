import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillLoad() {
    console.log('[3] will load fired');
  }

  ionViewDidLoad() {
    console.log('[3] did load fired');
  }

  ionViewWillEnter() {
    console.log('[3] will enter fired');
  }

  ionViewDidEnter() {
    console.log('[3] did enter fired');
  }

}
