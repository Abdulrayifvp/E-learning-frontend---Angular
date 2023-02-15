import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-add-module',
  templateUrl: './instructor-add-module.component.html',
  styleUrls: ['./instructor-add-module.component.css']
})
export class InstructorAddModuleComponent implements OnInit {
  errorMessage: string = ''
  addModuleForm !: FormGroup
  submitted = false;
  progress = 0
  courseId: string = '';



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id']
    })

    this.addModuleForm = this.formbuilder.group({
      title: [null, [Validators.required, Validators.minLength(8)]],
      description: [null, [Validators.required, Validators.minLength(15)]],
      note: [null, [Validators.required]],
      moduleVideo: [null, [Validators.required]],
    })
  }

  async noteSelection(event: any) {
    const file = await event.target.files[0]
    this.addModuleForm.patchValue({
      note: file
    })
    this.addModuleForm.get('note')?.updateValueAndValidity();

  }

  async moduleVideoSelection(event: any) {
    const file = await event.target.files[0]
    this.addModuleForm.patchValue({
      moduleVideo: file
    })
    this.addModuleForm.get('moduleVideo')?.updateValueAndValidity();
  }

  constructor(private route: ActivatedRoute, private formbuilder: FormBuilder, private instructorService: InstructorService, private router: Router, private httpClient: HttpClient) {
  }

  onSubmit() {



    this.submitted = true
    if (this.addModuleForm.invalid) {
      return
    }

    this.instructorService.addModule(this.addModuleForm.value, this.courseId).subscribe((event: HttpEvent<any> | any) => {
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
            this.router.navigate(['/instructor/courses/manageCourse/' + this.courseId])
          }, 1500);
      }
    })
  }

}
