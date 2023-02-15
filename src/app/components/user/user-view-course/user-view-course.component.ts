import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view-course',
  templateUrl: './user-view-course.component.html',
  styleUrls: ['./user-view-course.component.css']
})
export class UserViewCourseComponent implements OnInit {

  videoUrl: any
  course: any
  courseId: any
  video: any;
  activeModuleId: any;
  purchasedCourses: any;


  constructor(private route: ActivatedRoute, private userService: UserServices) { }

  ngOnInit(): void {
    this.course = this.route.params.subscribe(params => {
      this.getCourseById(params['id'])
    })
    this.userService.getPurchasedCourse().subscribe((result: any) => {
      this.purchasedCourses = result
    })
  }

  getCourseById(id: string) {
    this.userService.getCourse(id).subscribe((course: any) => {
      this.course = course
      this.video = course.previewVideo
      this.activeModuleId = course._id
    })
  }

  playPreview() {
    this.video = this.course.previewVideo
    this.activeModuleId = this.course._id
  }

  changeVideo(id: string, index: number) {
    this.userService.getCourse(id).subscribe((course: any) => {
      this.video = course.modules[index].moduleVideo
      this.activeModuleId = course.modules[index]._id
    })
  }

  downloadMyFile(urlLink: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', urlLink);
    link.setAttribute('download', urlLink);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


}
