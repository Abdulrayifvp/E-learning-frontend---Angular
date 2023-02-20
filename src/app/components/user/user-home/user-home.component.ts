import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  purchasedCourses: string[] = []
  fetchedcourses: course[] = []
  displayedCourse: course[] = []
  searchTerm!: string


  constructor(private userService: UserServices) { }

  ngOnInit(): void {
    this.userService.getAllCourses().subscribe((result: course[]) => {
      this.fetchedcourses = result
      this.displayedCourse = this.fetchedcourses
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

  search() {
    if (this.searchTerm != '') {
      this.displayedCourse = this.fetchedcourses.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.displayedCourse = this.fetchedcourses
    }
  }



}
