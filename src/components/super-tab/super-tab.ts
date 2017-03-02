import {Component, Input} from '@angular/core';

/*
  Generated class for the SuperTab component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'super-tab',
  templateUrl: 'super-tab.html'
})
export class SuperTabComponent {

  @Input()
  tabRoot: any;

  @Input()
  title: string;

  @Input()
  icon: string;

  constructor() {
    console.log('Hello SuperTab Component');
  }

}
