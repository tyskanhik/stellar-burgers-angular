import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private api: ApiService, private router: Router) {}

  public formRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public register() {
    if(this.formRegister.valid) {
      this.api.registerUser(this.formRegister.value).subscribe({
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }
}
