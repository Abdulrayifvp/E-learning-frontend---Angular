import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { CourseViewComponent } from './components/admin/course-view/course-view.component';
import { ManageCoursesComponent } from './components/admin/manage-courses/manage-courses.component';
import { InstructorAddCourseComponent } from './components/instructor/instructor-add-course/instructor-add-course.component';
import { InstructorAddModuleComponent } from './components/instructor/instructor-add-module/instructor-add-module.component';
import { InstructorCourseEditComponent } from './components/instructor/instructor-course-edit/instructor-course-edit.component';
import { InstructorCoursesComponent } from './components/instructor/instructor-courses/instructor-courses.component';
import { InstructorHomeComponent } from './components/instructor/instructor-home/instructor-home.component';
import { InstructorLoginComponent } from './components/instructor/instructor-login/instructor-login.component';
import { InstructorManageCourseComponent } from './components/instructor/instructor-manage-course/instructor-manage-course.component';
import { InstructorRegisterComponent } from './components/instructor/instructor-register/instructor-register.component';
import { InstructorSubscribersListComponent } from './components/instructor/instructor-subscribers-list/instructor-subscribers-list.component';
import { UserCheckoutPageComponent } from './components/user/user-checkout-page/user-checkout-page.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserPurchaseFailedPageComponent } from './components/user/user-purchase-failed-page/user-purchase-failed-page.component';
import { UserPurchaseSuccessPageComponent } from './components/user/user-purchase-success-page/user-purchase-success-page.component';
import { UserPurchasedCoursesComponent } from './components/user/user-purchased-courses/user-purchased-courses.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserViewCourseComponent } from './components/user/user-view-course/user-view-course.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { InstructorAuthGuard } from './guards/instructor-auth.guard';
import { UserAuthGuard } from './guards/userAuth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [

  {
    path: '',
    component: UserHomeComponent,
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'courses/:id',
    component: UserViewCourseComponent
  },
  {
    path: 'myCourses',
    component: UserPurchasedCoursesComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'courses/checkout/:id',
    component: UserCheckoutPageComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'courses/checkout/:id/success',
    component: UserPurchaseSuccessPageComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'courses/checkout/:id/failed',
    component: UserPurchaseFailedPageComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'instructor/login',
    component: InstructorLoginComponent
  },
  {
    path: 'instructor/register',
    component: InstructorRegisterComponent
  },
  {
    path: 'instructor',
    component: InstructorHomeComponent,
    canActivate: [InstructorAuthGuard]
  },
  {
    path: 'instructor/courses',
    component: InstructorCoursesComponent,
    canActivate: [InstructorAuthGuard]
  },
  {
    path: 'instructor/courses/addCourse',
    component: InstructorAddCourseComponent,
    canActivate: [InstructorAuthGuard]
  },
  {
    path: 'instructor/courses/manageCourse/:id',
    component: InstructorManageCourseComponent,
    canActivate: [InstructorAuthGuard]
  },
  {
    path: 'instructor/courses/subscribers/:id',
    component: InstructorSubscribersListComponent,
    canActivate: [InstructorAuthGuard]
  },
  {
    path: 'instructor/courses/manageCourse/:id/addModule',
    component: InstructorAddModuleComponent,
    canActivate: [InstructorAuthGuard]
  },
  {
    path: 'instructor/courses/manageCourse/:id/editCourse',
    component: InstructorCourseEditComponent,
    canActivate: [InstructorAuthGuard]
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent
  },
  {
    path: 'admin/manageCourses',
    component: ManageCoursesComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/manageCourses/:id',
    component: CourseViewComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
