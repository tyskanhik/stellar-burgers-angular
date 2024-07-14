import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  protected isUser: boolean = false;

  constructor(private store: StoreService) { }

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
