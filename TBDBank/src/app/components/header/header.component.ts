import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  //change to logout if user exists
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  getLoggedInUser() {
    return this.authService.getLoggedInUser();
  }

  toggleTheme() {
    if (document.body.getAttribute('data-theme')) {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  }
}
