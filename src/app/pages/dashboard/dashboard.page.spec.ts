import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { dashboardPage } from './dashboard.page';

describe('Tab1Page', () => {
  let component: dashboardPage;
  let fixture: ComponentFixture<dashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [dashboardPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(dashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
