import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTripComponent } from './pages/add-trip/add-trip.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TripSearchComponent } from './pages/trip-search/trip-search.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: TripSearchComponent },
  { path: 'add', component: AddTripComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
