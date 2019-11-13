import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';


@Component({
  template: `
    <ion-list>
      <ion-list-header>
        Examples
      </ion-list-header>
      <ion-item button (click)="navigateRoot('/home')">
        <ion-label>Basic</ion-label>
      </ion-item>
      <ion-item button (click)="navigateRoot('/examples/full-screen')">
        <ion-label>Full-screen</ion-label>
      </ion-item>
      <ion-item button (click)="navigateRoot('/examples/scrollable')">
        <ion-label>Scrollable</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class PreferencesPopover {
  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) {
  }

  navigateRoot(example: string) {
     this.navCtrl.navigateRoot(example);
     this.popoverCtrl.dismiss();
  }
}

@Component({
  selector: 'preferences',
  template: `
    <ion-buttons>
      <ion-button (click)="showPreferences($event)">
        <ion-icon color="tertiary" icon="more" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `,
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent {

  constructor(private popoverCtrl: PopoverController) {
  }

  async showPreferences(event: any) {
    const p = await this.popoverCtrl.create({
      component: PreferencesPopover,
      event,
    });
    p.present();
  }

}
