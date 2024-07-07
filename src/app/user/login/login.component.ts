import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { StoreService } from 'src/app/services/store.service';
import { ApiUser } from 'src/app/services/types/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private _apiService: ApiService, private _storeService: StoreService) { }

  public formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public handleSubmit() {
    if (!this.formLogin.valid) {
      console.log(this.formLogin.value);
    } else {
      this._apiService.loginUser(this.formLogin.value).subscribe((data: ApiUser) => {
        this._storeService.setUser(data.user);
        console.log('User logged in', data);
      })
    }
  }
}
