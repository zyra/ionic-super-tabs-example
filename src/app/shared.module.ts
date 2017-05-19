import { NgModule } from '@angular/core';
import { SuperTabsModule } from '../super-tabs/src';
// import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  exports: [
    SuperTabsModule
  ]
})
export class SharedModule {}
