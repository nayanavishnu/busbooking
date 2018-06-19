import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/modal/user';
import { Busroute } from 'src/app/shared/modal/busroute';
import { Bus } from 'src/app/shared/modal/bus';
import { Seats } from 'src/app/shared/modal/seats';
import { Paymentmode } from 'src/app/shared/modal/paymentmode';
import { Httpmode } from 'src/app/shared/modal/httpmode';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  loginUser: User;
  searchedBusList: Bus[] = [];
  selectedSeats: Seats[] = [];
  selectedBus: Bus;
  users: User[] = [
    new User(1, "Nayana", "Nayana"),
    new User(2, "Robin", "Robin")
  ];
  buses: Bus[] = [];
  // buses: Bus[] = [
  //   new Bus(1, 'Kallada', new Busroute(1, "Trivandrum", "Chennai", "2018-05-08"), 8, [],1500),
  //   new Bus(2, 'Remya', new Busroute(1, "Trivandrum", "Chennai", "2018-05-08"), 5, [],2000),
  //   new Bus(3, 'Parakkal', new Busroute(2, "Calicut", "Palakkad", "2018-05-08"), 10, [],750),
  //   new Bus(4, 'RRT', new Busroute(3, "Chennai", "Trichur", "2018-05-08"), 20, [],1600),
  //   new Bus(5, 'Remya', new Busroute(4, "Wayanad", "Alapuzha", "2018-05-08"), 6, [],800)
  // ];

  paymentModes: Paymentmode[] = [
    new Paymentmode(1, "Internet Banking"),
    new Paymentmode(2, "Credit Card"),
    new Paymentmode(3, "COD")
  ];

  httpModes: Httpmode[] = [
    new Httpmode(1, "GET"),
    new Httpmode(2, "POST")
  ]


  constructor() { }

  validateUser(name: string, password: string) {
    return this.users.find(user => user.name === name && user.password === password);
  }

  searchBusByRoutes(route: Busroute) {
    this.searchedBusList = [];
    this.buses.forEach(bus => {
      bus.showBus = false;
      if (bus.busroute.from === route.from && bus.busroute.to === route.to && bus.busroute.date === route.date) {
        bus.seats = [];
        for (let i = 0; i < bus.totalseat; i++) {
          bus.seats.push(new Seats(i + 1, 0, bus.id, false));
        }
        this.searchedBusList.push(bus);
      }
    });
  }

  getBusList(): Bus[] {
    return this.searchedBusList;
  }

  setBusDetails(bus: Bus, seats: Seats[]) {
    this.selectedBus = bus;
    this.selectedSeats = seats;
  }


  private newFunction() {
    return this;
  }
}
