import { NumberSymbol } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

function _window(): any {
  return window
}
@Injectable({
  providedIn: 'root'
})
export class UserServices {

  get nativeWindow(): any {
    return _window()
  }

  url = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  signup(data: object) {
    return this.httpClient.post(this.url + "/register", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  login(data: object) {
    return this.httpClient.post(this.url + "/login", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  logout() {
    return localStorage.removeItem('userToken')
  }

  isLoggedIn() {
    return !!localStorage.getItem('userToken')
  }

  getToken() {
    return localStorage.getItem('userToken')
  }

  getAllCourses() {
    return this.httpClient.get<any>(this.url + '/courses/all')
  }

  getPurchasedCourse() {
    return this.httpClient.get<any>(this.url + '/purchasedCourses')
  }
  getPurchasedCourseDetailed() {
    return this.httpClient.get<any>(this.url + '/purchasedCoursesDetailed')
  }

  getCourse(id: string) {
    return this.httpClient.get(this.url + '/courses/' + id)
  }

  getPreviewVideoUrl(id: string) {
    return this.httpClient.get(this.url + '/getPreviewVideoUrl/' + id)
  }

  createOrder(data: any) {
    return this.httpClient.post(this.url + '/createOrder', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  paymentSuccess(data: any, courseId: string) {
    return this.httpClient.post(this.url + '/paymentSuccess', { data, courseId }, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }



}
