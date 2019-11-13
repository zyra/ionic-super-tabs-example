import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PreferencesComponent, PreferencesPopover } from './preferences.component';


@NgModule({
  declarations: [
    PreferencesComponent,
    PreferencesPopover,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  entryComponents: [
    PreferencesPopover,
  ],
  exports: [
    PreferencesComponent,
    PreferencesPopover,
  ],
})
export class PreferencesModule {
}
