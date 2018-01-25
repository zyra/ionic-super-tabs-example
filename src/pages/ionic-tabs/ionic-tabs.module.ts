import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicTabsPage } from './ionic-tabs';

@NgModule({
  declarations: [
    IonicTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicTabsPage),
  ],
})
export class IonicTabsPageModule {}
