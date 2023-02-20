import { Location } from '@angular/common';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-course-module-edit',
  templateUrl: './instructor-course-module-edit.component.html',
  styleUrls: ['./instructor-course-module-edit.component.css']
})
export class InstructorCourseModuleEditComponent {
  errorMessage: string = ''
  editModuleForm !: FormGroup
  submitted = false;
  progress = 0
  courseId: string = '';
  module: any
  checked: boolean = false

  constructor(private activeroute: ActivatedRoute, private instructorService: InstructorService, private formbuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(params => {
      this.getCourseModuleById(params['id'], params['moduleId'])
      this.courseId = params['id']
    })
    this.editModuleForm = this.formbuilder.group({
      title: [null, [Validators.required, Validators.minLength(8)]],
      description: [null, [Validators.required, Validators.minLength(15)]],
      note: [null],
      moduleVideo: [null],
    })
  }

  getCourseModuleById(courseId: string, moduleId: string) {
    this.instructorService.getModule(courseId, moduleId).subscribe((result) => {
      this.module = result
      this.editModuleForm.controls['title'].setValue(this.module.element.title);
      this.editModuleForm.controls['description'].setValue(this.module.element.description);
    })
  }

  check() {
    this.checked = !this.checked
  }


  onSubmit() {
    this.submitted = true
    if (this.editModuleForm.invalid) {
      return
    }
    this.instructorService.editModule(this.editModuleForm.value, this.courseId, this.module.element._id).subscribe((event: HttpEvent<any> | any) => {
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

  noteSelection(event: any) {
    const file = event.target.files[0]
    this.editModuleForm.patchValue({
      note: file
    })
    this.editModuleForm.get('note')?.updateValueAndValidity();

  }

  moduleVideoSelection(event: any) {
    const file = event.target.files[0]
    this.editModuleForm.patchValue({
      moduleVideo: file
    })
    this.editModuleForm.get('moduleVideo')?.updateValueAndValidity();
  }

  viewNote() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.module.element.note);
    link.setAttribute('download', this.module.element.note);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


}
