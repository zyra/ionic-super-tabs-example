import { Component } from '@angular/core';
import { ContactsPage } from '../contacts/contacts.page';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contactsPage = ContactsPage;
  profilePage = ProfilePage;
}
