import {Component} from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';
import { Page1Page } from "../page1/page1";
import { Page2Page } from "../page2/page2";
import { Page3Page } from "../page3/page3";

@Component({
  selector: 'page-partial-home',
  templateUrl: 'partial-home.html'
})
export class PartialHomePage {

  page1: any = Page1Page;
  page2: any = Page2Page;
  page3: any = Page3Page;

  showIcons: boolean;
  showTitles: boolean;
  pageTitle: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.showIcons = navParams.get('icons');
    this.showTitles = navParams.get('titles');
    this.pageTitle = navParams.get('pageTitle');
  }

}
