import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchAddressTo= "";
  searchAddressFrom="";
  todaysDate: Date | undefined;
  searchPrice: number | undefined;

  trips = [
    {id: 1, fromAdress: "Saulėtekio al. 11", fromCity: "Vilnius", fromCountry: "Lietuva", toAdress: "Vilniaus g. 27", toCity: "Vilnius", toCountry: "Lietuva", date: "2022-10-31", price: "2", freeSeats: 3, driversName: "Simon R.", driversRating: 5.00},
    {id: 2, fromAdress: "Justiniškių g. 77", fromCity: "Vilnius", fromCountry: "Lietuva", toAdress: "Jogailos g. 12", toCity: "Vilnius", toCountry: "Lietuva", date: "2022-11-01", price: "2", freeSeats: 3, driversName: "Jonas J.", driversRating: 4.47},
    {id: 3, fromAdress: "Oginskio g. 5", fromCity: "Vilnius", fromCountry: "Lietuva", toAdress: "Pilies g. 27", toCity: "Vilnius", toCountry: "Lietuva", date: "2022-11-01", price: "3", freeSeats: 3, driversName: "Petras P.", driversRating: 4.98}
  ];

  calculateMaxTripPrice(): number {
    let maxTripPrice = 0;
    for (let i = 0; i < this.trips.length; i++) {
      if(parseInt(this.trips[i].price) > maxTripPrice) {
        maxTripPrice = parseInt(this.trips[i].price);
      }
    }
    return maxTripPrice;
  }

}
