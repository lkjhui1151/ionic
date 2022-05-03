import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreProjectPage } from './cre-project.page';


describe('CreProjectPage', () => {
  let component: CreProjectPage;
  let fixture: ComponentFixture<CreProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreProjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
