import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PageToPushPage} from "./page-to-push";

@NgModule({
  declarations: [
    PageToPushPage
  ],
  imports: [
    IonicPageModule.forChild(PageToPushPage)
  ]
})
export class Module {}
