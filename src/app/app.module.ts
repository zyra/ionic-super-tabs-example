import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SuperTabsComponent} from "../components/super-tabs/super-tabs";
import {Page1Page} from "../pages/page1/page1";
import {Page2Page} from "../pages/page2/page2";
import {SuperTabComponent} from "../components/super-tab/super-tab";
import {Page3Page} from "../pages/page3/page3";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SuperTabsComponent,
    SuperTabComponent,
    Page1Page,
    Page2Page,
    Page3Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1Page,
    Page2Page,
    Page3Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
