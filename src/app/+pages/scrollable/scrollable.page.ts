import { Component } from '@angular/core';


@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.page.html',
  styleUrls: ['./scrollable.page.scss'],
})
export class ScrollablePage {
  tabs: Array<{ label: string }>;

  constructor() {
    const tabs = [];
    for (let i = 0; i < 10; i++) {
      tabs.push({ label: `Tab ${i}` });
    }
    this.tabs = tabs;
  }

}
