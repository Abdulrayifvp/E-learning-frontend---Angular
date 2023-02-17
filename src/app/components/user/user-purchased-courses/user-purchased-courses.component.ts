import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-purchased-courses',
  templateUrl: './user-purchased-courses.component.html',
  styleUrls: ['./user-purchased-courses.component.css']
})
export class UserPurchasedCoursesComponent implements OnInit {

  constructor(private userService: UserServices) { }
  purchasedCourses !: course[]

  ngOnInit(): void {
    this.userService.getPurchasedCourseDetailed().subscribe((result: course[]) => {
      this.purchasedCourses = result
    })
  }



}
