import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettProjectPage } from './sett-project.page';

describe('SettProjectPage', () => {
  let component: SettProjectPage;
  let fixture: ComponentFixture<SettProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettProjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
