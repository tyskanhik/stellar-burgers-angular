import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { StoreService } from 'src/app/services/store.service';
import { ApiUser, ApiUserToken, RegisterUser } from 'src/app/services/types/types';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent {
  protected isUser: boolean = false;

  constructor(private store: StoreService, private api: ApiService) {
    this.loadData();
  }

  loadData() {
    this.api.getUserApi().subscribe({
      next: (data: ApiUser) => {
        this.store.setUser({ ...data.user, isLoget: true });
        this.formProfile.reset({
          name: data.user.name,
          email: data.user.email,
          password: ''
        })
        this.isUser = false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  public formProfile = new FormGroup({
    name: new FormControl(this.store.getUser().name, [Validators.required]),
    email: new FormControl(this.store.getUser().email, [Validators.required]),
    password: new FormControl('')
  })

  input(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement && e.target.value !== null) {

      if (
        this.store.getUser().name !== this.formProfile.get(['name'])?.value ||
        this.store.getUser().email !== this.formProfile.get(['email'])?.value ||
        this.formProfile.get(['password'])?.value
      ) {
        this.isUser = true
      } else {
        this.isUser = false
      }
    }
  }

  reset() {
    this.formProfile.reset({
      name: this.store.getUser().name,
      email: this.store.getUser().email,
      password: ''
    })
    this.isUser = false;
  }

  handleSubmit() {
    this.api.updateUserApi(this.formProfile.value)
      .subscribe({
        next: (data: ApiUserToken) => {
          this.store.setUser({ ...data.user, isLoget: true });
          this.formProfile.reset({
            name: data.user.name,
            email: data.user.email,
            password: ''
          })
          this.isUser = false;
        },
        error: error => console.log(error)
      })
  }
}
