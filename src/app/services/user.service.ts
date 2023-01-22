import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
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

  test() {
    return this.httpClient.get(this.url + '/test', {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  loggIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
