import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
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
  opts = {
    icon: false,
    label: true,
    toolbarPos: 'top',
    scrollable: true,
  };

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  tabs: any[] = [];

  ngAfterViewInit() {
    console.log('Super tabs', this.superTabs);
    // this.superTabs.selectTab(1);
  }
}
