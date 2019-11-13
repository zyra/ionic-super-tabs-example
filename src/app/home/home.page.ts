import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { PopoverController } from '@ionic/angular';
import { ContactsPage } from '../contacts/contacts.page';
import { ProfilePage } from '../profile/profile.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

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

  ngAfterViewInit() {
    console.log('Super tabs', this.superTabs);
    // this.superTabs.selectTab(1);
  }
}
