import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  isLoggedIn() {
    return !!localStorage.getItem('adminToken')
  }

  getToken() {
    return localStorage.getItem('adminToken')
  }
}
