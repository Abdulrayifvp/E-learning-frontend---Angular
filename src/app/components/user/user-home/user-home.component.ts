import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  courses!: course[]
  purchasedCourses: string[] = []


  constructor(private userService: UserServices) { }

  ngOnInit(): void {
    this.userService.getAllCourses().subscribe((result: course[]) => {
      this.courses = result
    })
    if (this.userService.isLoggedIn() === true) {
      this.userService.getPurchasedCourse().subscribe((result: string[]) => {
        console.log(result);

        this.purchasedCourses = result
      })
    } else {
      this.purchasedCourses = []
    }

  }



}
