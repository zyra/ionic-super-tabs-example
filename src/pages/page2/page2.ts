import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }


  ionViewDidLoad() {
    console.log('[2] did load fired');
  }

  ionViewDidEnter() {
    console.log('[2] did enter fired');
  }

}
