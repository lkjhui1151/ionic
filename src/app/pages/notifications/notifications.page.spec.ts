import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { notificationsPage } from './notifications.page';

describe('notificationsPage', () => {
  let component: notificationsPage;
  let fixture: ComponentFixture<notificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [notificationsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(notificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
