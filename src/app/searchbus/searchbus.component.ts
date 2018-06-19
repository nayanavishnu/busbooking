import { Component, OnInit } from '@angular/core';
import { Busroute } from 'src/app/shared/modal/busroute';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Router } from '@angular/router';
import { AjaxService } from 'src/app/shared/services/ajax.service';
import { Bus } from 'src/app/shared/modal/bus';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {
  from: string;
  to: string;
  date: string;

  constructor(private dataService: DataServiceService, private router: Router, private ajaxService: AjaxService) {
    this.from = 'Trivandrum';
    this.to = 'Chennai';
    this.date = '2018-05-08';
  }

  ngOnInit() {
    this.getBusList();
  }
  getBusList() {
    if (!this.dataService.buses.length) {
      this.ajaxService.getBusList_post().subscribe(response => {
        this.dataService.buses = response;
        // for (let i = 0; i < response['length']; i++) {
        //   let routes = new Busroute(response[i].busroute.id, response[i].busroute.from, response[i].busroute.to, response[i].busroute.date);
        //   let bus    = new Bus(response[i].id, response[i].name, routes, response[i].totalseat, [], response[i].rate)
        //   this.dataService.buses.push(bus);
        // }
      },err=>{
        console.log(err);
      })
    }
  }

  searchbus() {
    const searchRoute = new Busroute(1, this.from, this.to, this.date);
    this.dataService.searchBusByRoutes(searchRoute);
    this.router.navigate(['search/view']);
  }
}
