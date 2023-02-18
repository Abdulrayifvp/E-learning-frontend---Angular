import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  count: number = 0

  constructor(private location: Location) { }

  ngOnInit(): void {

  }

  goBack() {
    this.location.back()
  }

}
