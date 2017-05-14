import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { PartialHomePage } from "../pages/partial-home/partial-home";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar) {
    this.rootPage = this.menuItems[0].page;
    this.rootParams = this.menuItems[0].params;
    platform.ready().then(() => {
      splashScreen.hide();
      statusBar.backgroundColorByHexString('#3949AB')
    });
  }

  openPage(page) {
    page.params.pageTitle = page.name;
    this.nav.setRoot(page.page, page.params);
  }

}
