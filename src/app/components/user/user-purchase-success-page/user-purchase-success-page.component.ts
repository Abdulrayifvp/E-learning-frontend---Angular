import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { course } from 'src/app/models/course.model';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-purchase-success-page',
  templateUrl: './user-purchase-success-page.component.html',
  styleUrls: ['./user-purchase-success-page.component.css']
})
export class UserPurchaseSuccessPageComponent implements OnInit {

  course!: course

  constructor(private zone: NgZone, private route: ActivatedRoute, private userService: UserServices, private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.route.params.subscribe(params => {
      this.userService.getCourse(params['id']).subscribe((course: course) => {
        this.course = course
        this.zone.run(() => {
          this.router.navigate(['courses/' + course._id])
        });

      })
    })

  }



}
