import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-instructor-add-course',
  templateUrl: './instructor-add-course.component.html',
  styleUrls: ['./instructor-add-course.component.css']
})
export class InstructorAddCourseComponent implements OnInit {
  errorMessage: string = ''
  addCourseForm !: FormGroup
  submitted = false;
  progress = 0
  checked: boolean = false



  ngOnInit(): void {
    this.addCourseForm = this.formbuilder.group({
      title: [null, [Validators.required, Validators.minLength(8)]],
      description: [null, [Validators.required, Validators.minLength(15)]],
      thumbnail: [null, [Validators.required]],
      level: [null, [Validators.required]],
      previewVideo: [null, [Validators.required]],
      prize: [null, [Validators.required]],
      offerPrize: [null, [Validators.required]]
    })
  }

  thumbnailSelection(event: any) {
    const file = event.target.files[0]
    this.addCourseForm.patchValue({
      thumbnail: file
    })
    this.addCourseForm.get('thumbnail')?.updateValueAndValidity();
  }

  previewVideoSelection(event: any) {
    const File = event.target.files[0]
    this.addCourseForm.patchValue({
      previewVideo: File,
    });
    this.addCourseForm.get('previewVideo')?.updateValueAndValidity();
  }

  constructor(private formbuilder: FormBuilder, private instructorService: InstructorService, private router: Router, private httpClient: HttpClient) {

  }

  check() {
    this.checked = !this.checked
  }


  onSubmit() {

    this.submitted = true
    if (this.addCourseForm.invalid) {
      return
    }


    this.instructorService.addCourse(this.addCourseForm.value).subscribe((event: HttpEvent<any> | any) => {
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
            this.router.navigate(['/instructor/courses'])
          }, 1500);
      }
    })
  }

}
