import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Bus } from 'src/app/shared/modal/bus';
import { Seats } from 'src/app/shared/modal/seats';
import { User } from 'src/app/shared/modal/user';

@Component({
  selector: 'app-busview',
  templateUrl: './busview.component.html',
  styleUrls: ['./busview.component.css']
})
export class BusviewComponent implements OnInit {
  busList: Bus[];
  loggedinUser: User;
  selectedSeats: Seats[];
  busSeats: Seats[];

  //seats: Seats[];

  constructor(private dataService: DataServiceService, private router: Router) {
    this.selectedSeats = [];
    this.busSeats = [];
    this.busList = this.dataService.getBusList();   
    this.loggedinUser = this.dataService.loginUser;
  }

  ngOnInit() {
  }

  showSeats(bus: Bus) {   
    for (let i = 0; i <  this.busList.length; i++) {
      if(bus.id != this.busList[i].id){
        this.busList[i].showBus = false;
      }      
    }   
    bus.showBus = !bus.showBus;
    this.busSeats = [];
    this.selectedSeats = [];
    for (let i = 0; i < bus.seats.length; i++) {
      this.busSeats.push(this.getSeatDetail(bus.bookedSeats, i+1, bus.seats[i]));
    }
    console.log(this.busSeats);
  }

  getSeatDetail(bookedSeats: Seats[], index: number, seat: Seats): Seats {
    let tempSeat: Seats;
    let gotSeat = false;    
    for (let i = 0; i < bookedSeats.length && !gotSeat; i++) {
      if (bookedSeats[i].seatId === index) {
        gotSeat = true;
        tempSeat = bookedSeats[i];
      }
    }
    if (!gotSeat) {
      tempSeat = seat;
    }
    return tempSeat;
  }

  selectSeat(seat: Seats) {
    seat.selectSeat = !seat.selectSeat;
    if (seat.selectSeat) {
      this.selectedSeats.push(seat);
    } else {
      const index = this.selectedSeats.indexOf(seat);
      this.selectedSeats.splice(index, 1);
    }

    console.log(this.selectedSeats);
  }

  bookBus(busDetails: Bus) {
    this.dataService.setBusDetails(busDetails, this.selectedSeats);
    this.router.navigate(["search/payment"]);
  }

}
