import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {

  courses: any

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.fetchAllCourses().subscribe((result) => {
      this.courses = result
    })
  }

  getAllCourses() {
    this.adminService.fetchAllCourses().subscribe((result) => {
      this.courses = result
    })
  }

  getVerifiedCourses() {
    this.adminService.fetchVerifiedCourses().subscribe((result) => {
      this.courses = result
    })
  }

  getVerifingCourses() {
    this.adminService.fetchUnderVerificationCourses().subscribe((result) => {
      this.courses = result
    })
  }

  getPendingCourse() {
    this.adminService.fetchVerificationPendingCourses().subscribe((result) => {
      this.courses = result
    })
  }




}
