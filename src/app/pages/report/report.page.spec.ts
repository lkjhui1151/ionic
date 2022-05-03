import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { reportPage } from './report.page';

describe('reportPage', () => {
  let component: reportPage;
  let fixture: ComponentFixture<reportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [reportPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(reportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
