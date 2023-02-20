import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { course } from '../models/course.model';

type AddCoursedata = {
  title: string,
  description: string,
  thumbnail: string,
  previewVideo: string,
  level: string,
  prize: string,
  offerPrize: string
}

type addModuledata = {
  title: string,
  description: string,
  note: string,
  moduleVideo: string
}

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

  logout() {
    return localStorage.removeItem('instructorToken')
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


  addCourse(data: AddCoursedata) {

    const { title, description, thumbnail, previewVideo, level, prize, offerPrize } = data

    var formData: any = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('thumbnail', thumbnail)
    formData.append('previewVideo', previewVideo)
    formData.append('level', level)
    formData.append('prize', prize)
    formData.append('offerPrize', offerPrize)
    formData.append('instructorToken', this.getToken())

    return this.httpClient.post(this.url + '/instructor/courses/addCourse', formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  editCourse(data: AddCoursedata, courseId: string, modules: any[]) {

    const { title, description, thumbnail, previewVideo, level, prize, offerPrize } = data


    var formData: any = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('thumbnail', thumbnail)
    formData.append('previewVideo', previewVideo)
    formData.append('level', level)
    formData.append('prize', prize)
    formData.append('offerPrize', offerPrize)
    formData.append('modules', JSON.stringify(modules))
    // modules.forEach((item) => formData.append("modules[]", item))
    formData.append('instructorToken', this.getToken())

    console.log(formData);


    return this.httpClient.post(this.url + '/instructor/courses/editCourse/' + courseId, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  addModule(data: addModuledata, id: string) {
    const { title, description, note, moduleVideo } = data


    var formData: any = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('note', note)
    formData.append('moduleVideo', moduleVideo)



    return this.httpClient.post(this.url + '/instructor/courses/' + id + '/addModule', formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  editModule(data: addModuledata, courseId: string, moduleId: string) {
    const { title, description, note, moduleVideo } = data

    var formData: any = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('note', note)
    formData.append('moduleVideo', moduleVideo)

    return this.httpClient.post(this.url + '/instructor/courses/' + courseId + '/editModule/' + moduleId, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }


  fetchCourses() {
    return this.httpClient.get<course[]>(this.url + '/instructor/courses/')
  }

  getCourse(id: string) {
    return this.httpClient.get<course>(this.url + '/instructor/courses/' + id)
  }

  getModule(courseId: string, moduleId: string) {
    return this.httpClient.get(this.url + '/instructor/course/' + courseId + '/module/' + moduleId)
  }


  fetchSubscribers(id: string) {
    return this.httpClient.get<any>(this.url + '/instructor/subscribers/' + id)
  }

}
