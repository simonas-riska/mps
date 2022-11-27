import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterAddressFromPipe } from './pipes/filterAddressFrom.pipe';
import { FilterAddressToPipe } from './pipes/filterAddressTo.pipe';
import { FilterDatePipe } from './pipes/filterDate.pipe';
import { FilterPricePipe } from './pipes/filterPrice.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TripSearchComponent } from './pages/trip-search/trip-search.component';
import { FormsModule } from '@angular/forms';
import { AddTripComponent } from './pages/add-trip/add-trip.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterAddressToPipe,
    FilterAddressFromPipe,
    FilterDatePipe,
    FilterPricePipe,
    HomepageComponent,
    TripSearchComponent,
    AddTripComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
