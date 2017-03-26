import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {PartialHomePage} from "../pages/partial-home/partial-home";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  rootParams: any;

  menuItems: any[] = [
    {
      name: 'Full page',
      page: HomePage,
      params: { icons: true, titles: true, pageTitle: 'Full page' }
    },
    {
      name: 'Full - Title only',
      page: HomePage,
      params: { icons: false, titles: true }
    },
    {
      name: 'Full - Icons only',
      page: HomePage,
      params: { icons: true, titles: false }
    },
    {
      name: 'Partial nav',
      page: PartialHomePage,
      params: { icons: true, titles: true }
    },
    {
      name: 'Partial - Title only',
      page: PartialHomePage,
      params: { icons: false, titles: true }
    },
    {
      name: 'Partial - Icons only',
      page: PartialHomePage,
      params: { icons: true, titles: false }
    }
  ];

  constructor(platform: Platform) {
    this.rootPage = this.menuItems[0].page;
    this.rootParams = this.menuItems[0].params;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    page.params.pageTitle = page.name;
    this.nav.setRoot(page.page, page.params);
  }

}
