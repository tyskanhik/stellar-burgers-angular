import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isAuth = false;


  constructor(private router: Router) {}

  changeAuth(): void {
    this.isAuth =! this.isAuth;
  }

  userNavigate() {
    this.isAuth? this.router.navigate(['/profile']) : this.router.navigate(['/login']);
  }
}
