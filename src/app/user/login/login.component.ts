import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'cypress/types/jquery';
import { ApiService } from 'src/app/services/api/api.service';
import { setCookie } from 'src/app/services/token/cookie';
import { StoreService } from 'src/app/services/store.service';
import { ApiUser } from 'src/app/services/types/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected errorUser: boolean = false; 

  constructor(private _apiService: ApiService, private _storeService: StoreService, private router: Router) { }

  public formLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  public handleSubmit() {
    if (!this.formLogin.valid) {
      console.log(this.formLogin.valid);
    } else {
      this._apiService.loginUser(this.formLogin.value)
        .subscribe({
          next: (data: ApiUser) => {
            this._storeService.setUser(data.user);
            setCookie('accessToken', data.accessToken)
            this.router.navigate(['/profile'])
          },
          error: error => this.errorUser = !error.ok
        })
    }
  }
}
