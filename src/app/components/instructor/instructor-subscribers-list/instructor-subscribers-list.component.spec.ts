import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSubscribersListComponent } from './instructor-subscribers-list.component';

describe('InstructorSubscribersListComponent', () => {
  let component: InstructorSubscribersListComponent;
  let fixture: ComponentFixture<InstructorSubscribersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorSubscribersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorSubscribersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
