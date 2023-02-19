import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-course-edit',
  templateUrl: './instructor-course-edit.component.html',
  styleUrls: ['./instructor-course-edit.component.css']
})
export class InstructorCourseEditComponent implements OnInit {
  errorMessage: string = ''
  editCourseForm !: FormGroup
  submitted = false;
  progress = 0

  constructor(private formbuilder: FormBuilder, private instructorService: InstructorService, private router: Router, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.editCourseForm = this.formbuilder.group({
      title: [null, [Validators.required, Validators.minLength(8)]],
      description: [null, [Validators.required, Validators.minLength(15)]],
      thumbnail: [null, [Validators.required]],
      level: [null, [Validators.required]],
      previewVideo: [null, [Validators.required]],
      prize: [null, [Validators.required]],
      offerPrize: [null, [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true
    if (this.editCourseForm.invalid) {
      return
    }
  }

  thumbnailSelection(event: Event) { }

  previewVideoSelection(event: Event) { }

}
