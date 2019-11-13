import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { IonicModule } from '@ionic/angular';
import { PreferencesModule } from '../../+components/preferences/preferences.module';

import { FullScreenPageRoutingModule } from './full-screen-routing.module';

import { FullScreenPage } from './full-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullScreenPageRoutingModule,
    SuperTabsModule,
    PreferencesModule,
  ],
  declarations: [FullScreenPage]
})
export class FullScreenPageModule {}
