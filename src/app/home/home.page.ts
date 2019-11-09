import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { PopoverController } from '@ionic/angular';
import { ContactsPage } from '../contacts/contacts.page';
import { ProfilePage } from '../profile/profile.page';


@Component({
  template: `
    <ng-container *ngIf="opts">
      <ion-item>
        <ion-label>Show icons</ion-label>
        <ion-toggle slot="end" [(ngModel)]="opts.icon"></ion-toggle>
      </ion-item>
      <ion-item>
        <ion-label>Show labels</ion-label>
        <ion-toggle slot="end" [(ngModel)]="opts.label"></ion-toggle>
      </ion-item>
      <ion-item>
        <ion-label>Scrollable</ion-label>
        <ion-toggle slot="end" [(ngModel)]="opts.scrollable"></ion-toggle>
      </ion-item>
      <ion-item>
        <ion-label>Toolbar position</ion-label>
        <ion-select slot="end" [(ngModel)]="opts.toolbarPos">
          <ion-select-option value="top">Top</ion-select-option>
          <ion-select-option value="bottom">Bottom</ion-select-option>
        </ion-select>
      </ion-item>
    </ng-container>
  `,
})
export class PreferencesPopover {
  @Input() opts: {
    icon: boolean,
    label: boolean,
    toolbarPos: 'top' | 'bottom',
    scrollable: boolean,
  };
}

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

  constructor(private popoverCtrl: PopoverController) {
  }

  ngAfterViewInit() {
    console.log('Super tabs is ', this.superTabs);
    // this.superTabs.selectTab(1);
  }

  async showPreferences(event: any) {
    const p = await this.popoverCtrl.create({
      component: PreferencesPopover,
      event,
      componentProps: {
        opts: this.opts,
      },
    });
    p.present();
  }
}
