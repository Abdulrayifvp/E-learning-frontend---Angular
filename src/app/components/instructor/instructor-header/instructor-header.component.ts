import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';


@Component({
  selector: 'app-instructor-header',
  templateUrl: './instructor-header.component.html',
  styleUrls: ['./instructor-header.component.css']
})
export class InstructorHeaderComponent implements OnInit {

  constructor(private instructorService: InstructorService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.instructorService.isLoggedIn()
  }

  logout() {
    localStorage.removeItem('instructorToken')
    this.router.navigate(['/instructor/login'])
  }
}
