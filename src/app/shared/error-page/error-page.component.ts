import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  count: number = 0

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  goBack() {
    this.route.navigate(['/'])
  }

}
