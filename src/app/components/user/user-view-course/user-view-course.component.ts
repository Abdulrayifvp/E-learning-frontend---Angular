import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { course } from 'src/app/models/course.model';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view-course',
  templateUrl: './user-view-course.component.html',
  styleUrls: ['./user-view-course.component.css']
})
export class UserViewCourseComponent implements OnInit {

  videoUrl!: string
  course!: course
  courseId!: string
  video!: string;
  activeModuleId!: string;
  purchasedCourses: string[] = [];


  constructor(private route: ActivatedRoute, private userService: UserServices) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCourseById(params['id'])
    })
    if (this.userService.isLoggedIn() === true) {
      this.userService.getPurchasedCourse().subscribe((result: string[]) => {
        this.purchasedCourses = result
      })
    } else {
      this.purchasedCourses = []
    }

  }

  getCourseById(id: string) {
    this.userService.getCourse(id).subscribe((course: course) => {
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
    this.userService.getCourse(id).subscribe((course: course) => {
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
