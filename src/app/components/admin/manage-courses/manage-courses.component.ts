import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { course } from 'src/app/models/course.model';


@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {

  courses!: course[]

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.fetchAllCourses().subscribe((result: course[]) => {
      this.courses = result
    })
  }

  getAllCourses() {
    this.adminService.fetchAllCourses().subscribe((result: course[]) => {
      this.courses = result
    })
  }

  getVerifiedCourses() {
    this.adminService.fetchVerifiedCourses().subscribe((result: course[]) => {
      this.courses = result
    })
  }

  getVerifingCourses() {
    this.adminService.fetchUnderVerificationCourses().subscribe((result: course[]) => {
      this.courses = result
    })
  }

  getPendingCourse() {
    this.adminService.fetchVerificationPendingCourses().subscribe((result: course[]) => {
      this.courses = result
    })
  }




}
