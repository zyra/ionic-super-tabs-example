import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';
import { PreferencesModule } from '../+components/preferences/preferences.module';
import { ContactsPageModule } from '../contacts/contacts.module';
import { ProfilePageModule } from '../profile/profile.module';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    SuperTabsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    ContactsPageModule,
    ProfilePageModule,
    PreferencesModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {
}
