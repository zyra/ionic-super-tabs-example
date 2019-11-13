import { Component } from '@angular/core';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.page.html',
  styleUrls: ['./full-screen.page.scss'],
})
export class FullScreenPage {

  activeTabIndex: number;

  constructor() {
  }

  onTabChange(ev: CustomEvent<SuperTabChangeEventDetail>) {
    console.log('Tab change fired', ev);
    this.activeTabIndex = ev.detail.index;
  }
}
