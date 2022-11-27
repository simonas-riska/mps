import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  openSearch(): void {
    this.router.navigateByUrl('search');
  }

  openAddTrip(): void {
    this.router.navigateByUrl('add');
  }

}
