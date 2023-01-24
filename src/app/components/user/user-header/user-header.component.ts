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

  isLoggIn() {
    return this.userService.isLoggedIn()
  }

  logout() {
    localStorage.removeItem('userToken')
    this.router.navigate(['/login'])
  }
}
