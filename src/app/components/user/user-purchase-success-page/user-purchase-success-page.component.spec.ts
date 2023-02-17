import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchaseSuccessPageComponent } from './user-purchase-success-page.component';

describe('UserPurchaseSuccessPageComponent', () => {
  let component: UserPurchaseSuccessPageComponent;
  let fixture: ComponentFixture<UserPurchaseSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPurchaseSuccessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPurchaseSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
