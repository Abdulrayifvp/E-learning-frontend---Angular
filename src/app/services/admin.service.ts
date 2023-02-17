import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { course } from '../models/course.model';



@Injectable({
  providedIn: 'root'
})
export class AdminService {



  url = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  login(data: object) {
    return this.httpClient.post(this.url + "/admin/login", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  logout() {
    return localStorage.removeItem('adminToken')
  }

  isLoggedIn() {
    return !!localStorage.getItem('adminToken')
  }

  getToken() {
    return localStorage.getItem('adminToken')
  }

  fetchAllCourses() {
    return this.httpClient.get<course[]>(this.url + '/admin/courses/all')
  }
  fetchVerifiedCourses() {
    return this.httpClient.get<course[]>(this.url + '/admin/courses/verified')
  }
  fetchVerificationPendingCourses() {
    return this.httpClient.get<course[]>(this.url + '/admin/courses/pending')
  }
  fetchUnderVerificationCourses() {
    return this.httpClient.get<course[]>(this.url + '/admin/courses/verifing')
  }

  getCourse(id: string) {
    return this.httpClient.get<course>(this.url + '/admin/courses/' + id)
  }

  changeCourseStatus(id: string, status: string) {
    return this.httpClient.get(this.url + '/admin/courses/changeStatus/' + id + '/' + status)
  }
}
