import {Component} from '@angular/core';

import { NavController, NavParams, IonicPage} from 'ionic-angular';

@IonicPage({
  segment: 'partial-home/:type'
})
@Component({
  selector: 'page-partial-home',
  templateUrl: 'partial-home.html'
})
export class PartialHomePage {

  page1: any = 'Page1Page';
  page2: any = 'Page2Page';
  page3: any = 'Page3Page';

  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    const type = navParams.get('type');
    switch (type) {
      case 'icons-only':
        this.showTitles = false;
        this.pageTitle += ' - Icons only';
        break;

      case 'titles-only':
        this.showIcons = false;
        this.pageTitle += ' - Titles only';
        break;
    }
  }

}
