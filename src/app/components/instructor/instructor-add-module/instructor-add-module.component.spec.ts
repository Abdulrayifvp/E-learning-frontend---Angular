import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAddModuleComponent } from './instructor-add-module.component';

describe('InstructorAddModuleComponent', () => {
  let component: InstructorAddModuleComponent;
  let fixture: ComponentFixture<InstructorAddModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorAddModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorAddModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
