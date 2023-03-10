import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  url = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  signup(data: object) {
    return this.httpClient.post(this.url + "/instructor/register", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  login(data: object) {
    return this.httpClient.post(this.url + "/instructor/login", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  isLoggedIn() {
    return !!localStorage.getItem('instructorToken')
  }

  getToken() {
    return localStorage.getItem('instructorToken')
  }

  addCourse(data: any) {
    const { title, description, thumbnail, previewVideo, level, prize, offerPrize } = data

    var formData: any = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('thumbnail', thumbnail)
    formData.append('previewVideo', previewVideo)
    formData.append('level', level)
    formData.append('prize', prize)
    formData.append('offerPrize', offerPrize)

    console.log(formData);

    return this.httpClient.post(this.url + '/instructor/courses/addCourse', formData, {
      reportProgress: true,
      observe: 'events'
    })




  }
}
