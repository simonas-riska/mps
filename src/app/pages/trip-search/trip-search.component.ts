import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchAddressTo: string = "";
  searchAddressFrom: string = "";
  searchDate: Date | undefined;
  searchPrice: number | undefined;

  trips: { id: number, fromAddress: string, fromCity: string, fromCountry: string, toAddress: string, toCity: string, toCountry: string, date: string, price: string, freeSeats: number, driversName: string, driversRating: number}[] = [
    {id: 1, fromAddress: "Saulėtekio al. 11", fromCity: "Vilnius", fromCountry: "Lietuva", toAddress: "Vilniaus g. 27", toCity: "Vilnius", toCountry: "Lietuva", date: "2022-10-31", price: "2", freeSeats: 3, driversName: "Simon R.", driversRating: 5.00},
    {id: 2, fromAddress: "Justiniškių g. 77", fromCity: "Vilnius", fromCountry: "Lietuva", toAddress: "Jogailos g. 12", toCity: "Vilnius", toCountry: "Lietuva", date: "2022-11-01", price: "2", freeSeats: 3, driversName: "Jonas J.", driversRating: 4.47},
    {id: 3, fromAddress: "Oginskio g. 5", fromCity: "Vilnius", fromCountry: "Lietuva", toAddress: "Pilies g. 27", toCity: "Vilnius", toCountry: "Lietuva", date: "2022-11-01", price: "3", freeSeats: 3, driversName: "Petras P.", driversRating: 4.98}
  ];

  findMaxPriceOfTrip(): number {
    let maxTripPrice = 0;
    for (let trip of this.trips) {
      if (parseInt(trip.price) > maxTripPrice) {
        maxTripPrice = parseInt(trip.price);
      }
    }
    return maxTripPrice;
  }

}
