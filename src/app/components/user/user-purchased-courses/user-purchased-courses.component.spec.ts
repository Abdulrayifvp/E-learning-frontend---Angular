import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchasedCoursesComponent } from './user-purchased-courses.component';

describe('UserPurchasedCoursesComponent', () => {
  let component: UserPurchasedCoursesComponent;
  let fixture: ComponentFixture<UserPurchasedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPurchasedCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPurchasedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
