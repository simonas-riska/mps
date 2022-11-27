import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  openHomepage() {
    this.router.navigateByUrl('');
  }

  openSearch() {
    this.router.navigateByUrl('search');
  }

  openAddTrip() {
    this.router.navigateByUrl('add');
  }

  openLogin() {
    this.router.navigateByUrl('login');
  }

  openRegister() {
    this.router.navigateByUrl('register');
  }

}
