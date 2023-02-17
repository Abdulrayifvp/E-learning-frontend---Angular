import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchaseFailedPageComponent } from './user-purchase-failed-page.component';

describe('UserPurchaseFailedPageComponent', () => {
  let component: UserPurchaseFailedPageComponent;
  let fixture: ComponentFixture<UserPurchaseFailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPurchaseFailedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPurchaseFailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
