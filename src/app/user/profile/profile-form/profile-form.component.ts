import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { StoreService } from 'src/app/services/store.service';
import { ApiUser } from 'src/app/services/types/types';

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
        this.store.setUser({...data.user, isLoget: true});
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
    name: new FormControl(this.store.getUser().name),
    email: new FormControl(this.store.getUser().email),
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
}
