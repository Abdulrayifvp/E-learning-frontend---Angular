import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { course } from 'src/app/models/course.model';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-manage-course',
  templateUrl: './instructor-manage-course.component.html',
  styleUrls: ['./instructor-manage-course.component.css']
})
export class InstructorManageCourseComponent implements OnInit {

  course: course = {
    adminVerification: '',
    description: '',
    instructorID: '',
    level: '',
    modules: [],
    offerPrize: '',
    previewVideo: '',
    prize: '',
    thumbnail: '',
    title: '',
    _id: ''
  };
  video!: string;
  activeModuleId!: string;

  constructor(private route: ActivatedRoute, private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCourseById(params['id'])
    })
  }
  playPreview() {
    this.video = this.course.previewVideo
    this.activeModuleId = this.course._id
  }

  getCourseById(id: string) {
    this.instructorService.getCourse(id).subscribe((course: course) => {
      this.course = course
      this.video = course.previewVideo
      this.activeModuleId = course._id
    })
  }

  changeVideo(id: string, index: number) {
    this.instructorService.getCourse(id).subscribe((course: course) => {
      this.video = course.modules[index].moduleVideo
      this.activeModuleId = course.modules[index]._id
    })



  }

}
