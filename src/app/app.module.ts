import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Page1Page} from "../pages/page1/page1";
import {Page2Page} from "../pages/page2/page2";
import {Page3Page} from "../pages/page3/page3";

import { SuperTabsModule } from 'ionic2-super-tabs';
import {PartialHomePage} from "../pages/partial-home/partial-home";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PartialHomePage,
    Page1Page,
    Page2Page,
    Page3Page
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SuperTabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PartialHomePage,
    Page1Page,
    Page2Page,
    Page3Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
