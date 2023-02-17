import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckoutPageComponent } from './user-checkout-page.component';

describe('UserCheckoutPageComponent', () => {
  let component: UserCheckoutPageComponent;
  let fixture: ComponentFixture<UserCheckoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCheckoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
