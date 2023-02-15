import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-purchase-failed-page',
  templateUrl: './user-purchase-failed-page.component.html',
  styleUrls: ['./user-purchase-failed-page.component.css']
})
export class UserPurchaseFailedPageComponent implements OnInit {

  constructor(private zone: NgZone, private userService: UserServices, private router: Router, private route: ActivatedRoute) { }

  course: any;

  ngOnInit(): void {
  }

  redirect() {
    this.zone.run(() => {
      this.router.navigate(['/'])
    })
  }
}
