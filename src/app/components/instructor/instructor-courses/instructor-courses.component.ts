import { Component, OnInit } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-instructor-courses',
  templateUrl: './instructor-courses.component.html',
  styleUrls: ['./instructor-courses.component.css']
})
export class InstructorCoursesComponent implements OnInit {
  sortIcon = faSort;

  constructor() { }

  ngOnInit(): void {
  }

}
