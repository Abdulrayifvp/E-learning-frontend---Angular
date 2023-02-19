import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseEditComponent } from './instructor-course-edit.component';

describe('InstructorCourseEditComponent', () => {
  let component: InstructorCourseEditComponent;
  let fixture: ComponentFixture<InstructorCourseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorCourseEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorCourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
