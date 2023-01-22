import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private userService: UserServices, private router: Router) { }

  ngOnInit(): void {
  }

  onTest() {
    console.log('test called');

    return this.userService.test().subscribe((response) => {
      console.log(response);

    })
  }

  isLoggIn() {
    return this.userService.loggIn()
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
