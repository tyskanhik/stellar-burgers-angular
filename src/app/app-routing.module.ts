import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorComponent } from './constructor/constructor.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { isAuthGuard } from './guards/is-auth.guard';
import { isNotAuthGuard } from './guards/is-not-auth.guard';
import { ProfileOrderComponent } from './user/profile/profile-order/profile-order.component';
import { ProfileFormComponent } from './user/profile/profile-form/profile-form.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', component: ConstructorComponent},
  { path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'profile', component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileFormComponent
      },
      {
        path: 'order',
        component: ProfileOrderComponent,
        canActivate: [isAuthGuard]
      }
    ]
  },
  { path: 'feed', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
