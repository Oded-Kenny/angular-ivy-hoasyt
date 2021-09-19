import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private r: Router) {}

  logout() {
    window.localStorage.removeItem('user');

    //ניווט חזרה לעמוד לוגין

    this.r.navigate(['login']);
  }

  isLoggedIn() {
    return window.localStorage.getItem('user') != null;
  }
}
