import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SuperTabsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
