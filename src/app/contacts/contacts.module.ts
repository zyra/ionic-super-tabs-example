import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactsPage } from './contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ContactsPage],
  entryComponents: [
    ContactsPage,
  ],
  exports: [
    ContactsPage,
  ],
})
export class ContactsPageModule {
}
