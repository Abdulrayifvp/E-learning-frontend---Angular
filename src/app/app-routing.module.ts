import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { InstructorHomeComponent } from './components/instructor/instructor-home/instructor-home.component';
import { InstructorLoginComponent } from './components/instructor/instructor-login/instructor-login.component';
import { InstructorRegisterComponent } from './components/instructor/instructor-register/instructor-register.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    // canActivate: [AuthGuard]
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
    path: 'instructor/login',
    component: InstructorLoginComponent
  },
  {
    path: 'intructor/register',
    component: InstructorRegisterComponent
  },
  {
    path: 'instructor',
    component: InstructorHomeComponent
  },
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
