import { Component, ElementRef, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.page.html',
  styleUrls: ['./full-screen.page.scss'],
})
export class FullScreenPage {
  @ViewChild('superTabs', { static: false, read: SuperTabs }) st: SuperTabs;

  activeTabIndex: number;

  onTabChange(ev: CustomEvent<SuperTabChangeEventDetail>) {
    console.log('Tab change fired', ev);
    this.activeTabIndex = ev.detail.index;
  }

  selectTab(index: number) {
    this.st.selectTab(index, true);
  }
}
