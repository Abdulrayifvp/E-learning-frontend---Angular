import { Component, OnInit } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { InstructorService } from 'src/app/services/instructor.service';
import { course } from 'src/app/models/course.model';




@Component({
  selector: 'app-instructor-courses',
  templateUrl: './instructor-courses.component.html',
  styleUrls: ['./instructor-courses.component.css']
})
export class InstructorCoursesComponent implements OnInit {
  sortIcon = faSort;
  fetchedcourses!: course[]
  displayedCourse!: course[]
  searchTerm!: string

  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.instructorService.fetchCourses().subscribe((result: course[]) => {
      this.fetchedcourses = result
      this.displayedCourse = this.fetchedcourses
    })

  }

  search() {
    if (this.searchTerm != '') {
      this.displayedCourse = this.fetchedcourses.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.displayedCourse = this.fetchedcourses
    }

  }



}
