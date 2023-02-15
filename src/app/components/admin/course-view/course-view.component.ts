import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  course: any
  video: any;
  activeModuleId: any;


  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.course = this.route.params.subscribe(params => {
      this.getCourseById(params['id'])
    })
  }

  getCourseById(id: string) {
    this.adminService.getCourse(id).subscribe((course: any) => {
      this.course = course
      this.video = course.previewVideo
      this.activeModuleId = course._id
    })
  }

  changeStatus(event: Event, id: string) {

    const status = (event.target as HTMLInputElement).value
    console.log('call from ts', id, status);
    this.adminService.changeCourseStatus(id, status).subscribe()
  }

  changeVideo(id: string, index: number) {
    this.adminService.getCourse(id).subscribe((course: any) => {
      this.video = course.modules[index].moduleVideo
      this.activeModuleId = course.modules[index]._id
    })
  }

  playPreview() {
    this.video = this.course.previewVideo
    this.activeModuleId = this.course._id
  }



}
