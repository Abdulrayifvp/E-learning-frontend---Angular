import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { InstructorRegisterComponent } from './components/instructor/instructor-register/instructor-register.component';
import { InstructorLoginComponent } from './components/instructor/instructor-login/instructor-login.component';
import { InstructorHomeComponent } from './components/instructor/instructor-home/instructor-home.component';
import { InstructorHeaderComponent } from './components/instructor/instructor-header/instructor-header.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserServices } from './services/user.service';
import { UserAuthGuard } from './guards/userAuth.guard';
import { TokenIntercepterService } from './services/token-intercepter.service';
import { InstructorCoursesComponent } from './components/instructor/instructor-courses/instructor-courses.component';
import { InstructorAddCourseComponent } from './components/instructor/instructor-add-course/instructor-add-course.component';
import { ManageCoursesComponent } from './components/admin/manage-courses/manage-courses.component';
import { CourseViewComponent } from './components/admin/course-view/course-view.component';
import { InstructorManageCourseComponent } from './components/instructor/instructor-manage-course/instructor-manage-course.component';
import { InstructorAddModuleComponent } from './components/instructor/instructor-add-module/instructor-add-module.component';
import { UserViewCourseComponent } from './components/user/user-view-course/user-view-course.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { UserCheckoutPageComponent } from './components/user/user-checkout-page/user-checkout-page.component';
import { UserPurchaseSuccessPageComponent } from './components/user/user-purchase-success-page/user-purchase-success-page.component';
import { UserPurchaseFailedPageComponent } from './components/user/user-purchase-failed-page/user-purchase-failed-page.component';
import { ErrorIntercepterService } from './services/error-intercepter.service';
import { UserPurchasedCoursesComponent } from './components/user/user-purchased-courses/user-purchased-courses.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ErrorResponseIntercepterService } from './services/error-response-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    InstructorRegisterComponent,
    InstructorLoginComponent,
    InstructorHomeComponent,
    InstructorHeaderComponent,
    AdminHeaderComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    InstructorCoursesComponent,
    InstructorAddCourseComponent,
    ManageCoursesComponent,
    CourseViewComponent,
    InstructorManageCourseComponent,
    InstructorAddModuleComponent,
    UserViewCourseComponent,
    UserCheckoutPageComponent,
    UserPurchaseSuccessPageComponent,
    UserPurchaseFailedPageComponent,
    UserPurchasedCoursesComponent,
    ErrorPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [UserServices, UserAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercepterService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorResponseIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
