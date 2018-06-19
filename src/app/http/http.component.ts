import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Router } from '@angular/router';
import { Httpmode } from 'src/app/shared/modal/httpmode';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  httpModes : Httpmode[];
  httpMode : number;
  constructor(private dataService: DataServiceService, private router: Router) { 
    this.httpModes   = dataService.httpModes;
    this.httpMode = 1;
  }

  ngOnInit() {
  }

}
