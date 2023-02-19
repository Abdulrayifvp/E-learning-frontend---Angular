import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-subscribers-list',
  templateUrl: './instructor-subscribers-list.component.html',
  styleUrls: ['./instructor-subscribers-list.component.css']
})
export class InstructorSubscribersListComponent implements OnInit {

  subscribers: any[] = []

  constructor(private instructorService: InstructorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.instructorService.fetchSubscribers(params['id']).subscribe((result: any[]) => {
        this.subscribers = result
      })
    })

  }

}
