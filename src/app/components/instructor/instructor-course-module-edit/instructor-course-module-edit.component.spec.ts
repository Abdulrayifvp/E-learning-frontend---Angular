import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseModuleEditComponent } from './instructor-course-module-edit.component';

describe('InstructorCourseModuleEditComponent', () => {
  let component: InstructorCourseModuleEditComponent;
  let fixture: ComponentFixture<InstructorCourseModuleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorCourseModuleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorCourseModuleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
