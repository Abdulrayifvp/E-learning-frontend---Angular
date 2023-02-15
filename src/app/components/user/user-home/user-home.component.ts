import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  courses: any
  purchasedCourses: any

  constructor(private userService: UserServices) { }

  ngOnInit(): void {
    this.userService.getPurchasedCourse().subscribe((result: any) => {
      this.purchasedCourses = result
    })
    this.userService.getAllCourses().subscribe((result: any) => {
      this.courses = result
    })
  }



}
