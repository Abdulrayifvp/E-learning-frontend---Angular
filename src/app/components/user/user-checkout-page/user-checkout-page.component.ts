import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-checkout-page',
  templateUrl: './user-checkout-page.component.html',
  styleUrls: ['./user-checkout-page.component.css']
})
export class UserCheckoutPageComponent implements OnInit {

  course: any;
  rzp1: any;
  options: any




  constructor(private route: ActivatedRoute, private userService: UserServices, private router: Router, private zone: NgZone) { }

  ngOnInit(): void {
    this.course = this.route.params.subscribe(params => {
      this.getCourseById(params['id'])
    })
  }

  getCourseById(id: string) {
    this.userService.getCourse(id).subscribe((course: any) => {
      this.course = course
    })
  }



  checkout() {
    this.userService.createOrder({ amount: this.course.offerPrize, }).subscribe((data: any) => {
      let self = this.userService
      let router = this.router
      let course = this.course
      this.options = {
        "key": "rzp_test_RgCVtBX18ATpsX", // Enter the Key ID generated from the Dashboard
        "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "eduCart",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id,//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response: any) {
          self.paymentSuccess(response, course._id).subscribe((response: any) => {
            if (response.status === true) {
              router.navigate(['courses/checkout/' + course._id + '/success'])
            } else {
              router.navigate(['courses/checkout/' + course._id + '/failed'])
            }
          })


        },
        "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };

      this.rzp1 = new this.userService.nativeWindow.Razorpay(this.options);
      this.rzp1.open();
      const rzp = this.rzp1
      const zone = this.zone
      this.rzp1.on('payment.failed', function (response: any) {
        zone.run(() => {
          router.navigate(['courses/checkout/' + course._id + '/failed'])
          rzp.close()
        });
      });
    })
  }

}
