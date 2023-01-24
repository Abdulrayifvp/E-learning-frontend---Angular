import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.adminService.isLoggedIn()
  }

  logout() {
    localStorage.removeItem('adminToken')
    this.router.navigate(['/admin/login'])
  }

}
