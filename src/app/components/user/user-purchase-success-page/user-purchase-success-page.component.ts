import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-purchase-success-page',
  templateUrl: './user-purchase-success-page.component.html',
  styleUrls: ['./user-purchase-success-page.component.css']
})
export class UserPurchaseSuccessPageComponent implements OnInit {

  course: any

  constructor(private zone: NgZone, private route: ActivatedRoute, private userService: UserServices, private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.course = this.route.params.subscribe(params => {
      this.userService.getCourse(params['id']).subscribe((course: any) => {
        this.zone.run(() => {
          this.router.navigate(['courses/' + course._id])
        });

      })
    })

  }



}
