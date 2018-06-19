import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Router } from '@angular/router';
import { Bus } from 'src/app/shared/modal/bus';
import { Seats } from 'src/app/shared/modal/seats';
import { Paymentmode } from 'src/app/shared/modal/paymentmode';
import { PipesPipe } from 'src/app/shared/pipes.pipe';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selectedBus: Bus;
  selectedSeats: Seats[];
  gst: number;
  totalAmount: number;
  tax: number;
  payableAmount: number;
  paymentModes: Paymentmode[];
  paymentMode: number;
  constructor(private dataService: DataServiceService, private router: Router, private alertService: AlertService) {
    this.paymentModes = dataService.paymentModes;
    this.paymentMode = 1;
    this.selectedBus = dataService.selectedBus;
    this.selectedSeats = dataService.selectedSeats;
    this.gst = 18;
    this.totalAmount = this.selectedBus.ratePerSeat * this.selectedSeats.length;
    let taxObj = new PipesPipe();
    this.tax = taxObj.transform(this.totalAmount, this.gst);
    this.payableAmount = this.totalAmount + this.tax;
    console.log(this.selectedBus);
    console.log(this.selectedSeats);
  }

  ngOnInit() {
  }


  payNow() {
    this.selectedSeats.forEach(seat => {
      let tempSeat: Seats;
      tempSeat = new Seats(seat.seatId, this.dataService.loginUser.id, this.selectedBus.id, true);
      this.selectedBus.bookedSeats.push(tempSeat);
    });
    console.log(this.selectedBus);
    this.alertService.setAlert("Bus booked successfully ");
    this.router.navigate(["search"]);
  }


}
