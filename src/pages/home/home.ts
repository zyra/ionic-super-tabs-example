import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Page1Page} from "../page1/page1";
import {Page2Page} from "../page2/page2";
import {Page3Page} from "../page3/page3";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1: any = Page1Page;
  page2: any = Page2Page;
  page3: any = Page3Page;

  constructor(public navCtrl: NavController) {

  }

}
