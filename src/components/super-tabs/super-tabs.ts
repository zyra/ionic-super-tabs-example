import {Component, ContentChildren, Input, QueryList, ViewChild} from '@angular/core';
import {SuperTabComponent} from "../super-tab/super-tab";
import {Header, Platform, Slides} from "ionic-angular";

/*
  Generated class for the SuperTabs component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'super-tabs',
  templateUrl: 'super-tabs.html'
})
export class SuperTabsComponent {

  @ContentChildren(SuperTabComponent) superTabs: QueryList<SuperTabComponent>;

  tabs: SuperTabComponent[] = [];

  @ViewChild(Slides) slides: Slides;

  @ViewChild(Header) header: Header;
  headerHeight: number = 0;
  slidesHeight: number = 0;

  _selectedTabIndex = 0;
  @Input()
  set selectedTabIndex(val: number) {
    if (val >= this.tabs.length) {
      return;
    }
    this._selectedTabIndex = val;
    let slidePosition = val * this.slides.renderedWidth / this.tabs.length;
    this.slidePosition = slidePosition <= this.maxSlidePosition ? slidePosition + 'px' : this.maxSlidePosition + 'px';
    this.pageTitle = this.tabs[this.selectedTabIndex].title;
  }

  get selectedTabIndex(): number {
    return this._selectedTabIndex;
  }

  maxSlidePosition: number;
  slidePosition = '0';
  slideWidth = '0';
  shouldSlideEase: boolean = false;
  pageTitle: string = '';

  constructor(private platform: Platform) {
    console.log('Hello SuperTabs Component');
  }

  onDrag(ev: Slides) {
    if (ev._translate > 0) return;
    const percentage = Math.abs(ev._translate / ev._virtualSize);
    const singleSlideSize = ev._renderedSize;

    let slidePosition = percentage * singleSlideSize;

    if (slidePosition > this.maxSlidePosition) {
      slidePosition = this.maxSlidePosition;
    }

    this.slidePosition = slidePosition + 'px';
  }

  onSlideWillChange() {
    if (this.slides.getActiveIndex() <= this.tabs.length) {
      this.shouldSlideEase = true;
      this.selectedTabIndex = this.slides.getActiveIndex();
    }
  }

  onSlideDidChange() {
    this.shouldSlideEase = false;
  }

  onTabSelect(index: number) {
    if (index <= this.tabs.length) {
      this.slides.slideTo(index);
    }
  }

  ngAfterViewInit() {
    this.superTabs.forEach(tab => this.tabs.push(tab));
    this.pageTitle = this.tabs[this.selectedTabIndex].title;
    this.slideWidth = this.platform.width() / this.tabs.length + 'px';

    this.maxSlidePosition = this.platform.width() - (this.platform.width() / this.tabs.length);

    setTimeout(this.setHeights.bind(this), 100);

  }



  private setHeights() {
    this.headerHeight = this.header.getNativeElement().offsetHeight;
    this.slidesHeight = this.platform.height() - this.headerHeight;
  }


}
