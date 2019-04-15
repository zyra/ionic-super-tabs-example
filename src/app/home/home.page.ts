import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { ContactsPage } from '../contacts/contacts.page';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  contactsPage = ContactsPage;
  profilePage = ProfilePage;

  ngAfterViewInit() {
    console.log('Super tabs is ', this.superTabs);
    this.superTabs.selectTab(1);
  }
}
