import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {Page2Page} from "./page2";

@NgModule({
  declarations: [
    Page2Page
  ],
  imports: [
    IonicPageModule.forChild(Page2Page)
  ]
})
export class Module {}
