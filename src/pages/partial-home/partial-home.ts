import {Component} from '@angular/core';

import { NavController, NavParams, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-partial-home',
  templateUrl: 'partial-home.html'
})
export class PartialHomePage {

  page1: any = 'Page1Page';
  page2: any = 'Page2Page';
  page3: any = 'Page3Page';

  showIcons: boolean;
  showTitles: boolean;
  pageTitle: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.showIcons = navParams.get('icons');
    this.showTitles = navParams.get('titles');
    this.pageTitle = navParams.get('pageTitle');
  }

}
