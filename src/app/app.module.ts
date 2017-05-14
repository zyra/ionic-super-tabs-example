import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page1Page } from "../pages/page1/page1";
import { Page2Page } from "../pages/page2/page2";
import { Page3Page } from "../pages/page3/page3";

import { SuperTabsModule } from 'ionic2-super-tabs';
import { PartialHomePage } from "../pages/partial-home/partial-home";
import { PageToPushPage } from "../pages/page-to-push/page-to-push";

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PartialHomePage,
    Page1Page,
    Page2Page,
    Page3Page,
    PageToPushPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PartialHomePage,
    Page1Page,
    Page2Page,
    Page3Page,
    PageToPushPage
  ],
  providers: [
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
