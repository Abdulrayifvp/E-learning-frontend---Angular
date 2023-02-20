import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';
import { course } from 'src/app/models/course.model';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Location } from '@angular/common';

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
  showEditBtn: boolean = false
  course!: course
  courseId!: string
  thumbchanged: boolean = false
  previewchanged: boolean = false
  checked: boolean = false



  constructor(private location: Location, private formbuilder: FormBuilder, private instructorService: InstructorService, private router: Router, private activeroute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activeroute.params.subscribe(params => {
      this.getCourseById(params['id'])
      this.courseId = params['id']
    })

    this.editCourseForm = this.formbuilder.group({
      title: [null, [Validators.required, Validators.minLength(8)]],
      description: [null, [Validators.required, Validators.minLength(15)]],
      thumbnail: [null],
      level: [null, [Validators.required]],
      previewVideo: [null],
      prize: [null, [Validators.required]],
      offerPrize: [null, [Validators.required]]
    })

  }

  getCourseById(id: string) {
    this.instructorService.getCourse(id).subscribe((course: course) => {
      this.course = course
      this.modules = course.modules
      this.editCourseForm.controls['title'].setValue(this.course.title);
      this.editCourseForm.controls['description'].setValue(this.course.description);
      this.editCourseForm.controls['level'].setValue(this.course.level);
      this.editCourseForm.controls['prize'].setValue(this.course.prize);
      this.editCourseForm.controls['offerPrize'].setValue(this.course.offerPrize);
    })
  }

  check() {
    this.checked = !this.checked
  }

  onSubmit() {
    this.submitted = true
    if (this.editCourseForm.invalid) {
      return
    }

    this.instructorService.editCourse(this.editCourseForm.value, this.courseId, this.modules).subscribe((event: HttpEvent<any> | any) => {
      switch (event.type) {
        case HttpEventType.Sent:
          // console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          // console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round((event.loaded / event.total) * 100);
          // console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          // console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
            this.location.back()
          }, 1500);
      }
    })

  }

  thumbnailSelection(event: any) {
    const file = event.target.files[0]
    this.editCourseForm.patchValue({
      thumbnail: file
    })
    this.editCourseForm.get('thumbnail')?.updateValueAndValidity();
    this.thumbchanged = true
  }

  previewVideoSelection(event: any) {
    const File = event.target.files[0]
    this.editCourseForm.patchValue({
      previewVideo: File,
    });
    this.editCourseForm.get('previewVideo')?.updateValueAndValidity();
    this.previewchanged = true
  }

  modules: any = []

  drop(event: CdkDragDrop<string[] | any>) {
    moveItemInArray(this.modules, event.previousIndex, event.currentIndex);
  }

}
