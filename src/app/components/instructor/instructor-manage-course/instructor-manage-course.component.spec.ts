import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorManageCourseComponent } from './instructor-manage-course.component';

describe('InstructorManageCourseComponent', () => {
  let component: InstructorManageCourseComponent;
  let fixture: ComponentFixture<InstructorManageCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorManageCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorManageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
