import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScrollablePage } from './scrollable.page';

describe('ScrollablePage', () => {
  let component: ScrollablePage;
  let fixture: ComponentFixture<ScrollablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
