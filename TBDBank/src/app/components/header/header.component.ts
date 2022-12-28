import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  //TODO once login service added, change to logout if user exists
  isLoggedIn(): boolean{
    return false;
  }

  toggleTheme() {
    if (document.body.getAttribute('data-theme')) {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  }
}
