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
  courses!: course[]

  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.instructorService.fetchCourses().subscribe((result: course[]) => {
      this.courses = result
    })

  }



}
