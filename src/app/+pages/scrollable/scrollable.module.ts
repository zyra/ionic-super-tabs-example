import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { IonicModule } from '@ionic/angular';
import { PreferencesModule } from '../../+components/preferences/preferences.module';

import { ScrollablePageRoutingModule } from './scrollable-routing.module';

import { ScrollablePage } from './scrollable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollablePageRoutingModule,
    PreferencesModule,
    SuperTabsModule,
  ],
  declarations: [ScrollablePage]
})
export class ScrollablePageModule {}
