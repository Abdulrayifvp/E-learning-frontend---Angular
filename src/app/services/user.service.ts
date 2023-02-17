import { NumberSymbol } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { course } from '../models/course.model';
import { rzpOrderData } from '../models/rzpOrderData.model';
import { rzpPaymentStatus } from '../models/rzpPaymentStatus.model';

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
    return this.httpClient.get<course[]>(this.url + '/courses/all')
  }

  getPurchasedCourse() {
    return this.httpClient.get<string[]>(this.url + '/purchasedCourses')
  }
  getPurchasedCourseDetailed() {
    return this.httpClient.get<course[]>(this.url + '/purchasedCoursesDetailed')
  }

  getCourse(id: string) {
    return this.httpClient.get<course>(this.url + '/courses/' + id)
  }

  getPreviewVideoUrl(id: string) {
    return this.httpClient.get(this.url + '/getPreviewVideoUrl/' + id)
  }

  createOrder(data: object) {
    return this.httpClient.post<rzpOrderData>(this.url + '/createOrder', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  paymentSuccess(data: object, courseId: string) {
    return this.httpClient.post<rzpPaymentStatus>(this.url + '/paymentSuccess', { data, courseId }, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }



}
