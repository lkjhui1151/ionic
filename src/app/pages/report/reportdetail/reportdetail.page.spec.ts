import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportdetailPage } from './reportdetail.page';

describe('ReportdetailPage', () => {
  let component: ReportdetailPage;
  let fixture: ComponentFixture<ReportdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
