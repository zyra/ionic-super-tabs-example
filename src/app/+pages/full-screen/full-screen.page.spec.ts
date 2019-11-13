import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullScreenPage } from './full-screen.page';

describe('FullScreenPage', () => {
  let component: FullScreenPage;
  let fixture: ComponentFixture<FullScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
