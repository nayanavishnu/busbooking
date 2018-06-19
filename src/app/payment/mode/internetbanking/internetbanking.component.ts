import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-internetbanking',
  templateUrl: './internetbanking.component.html',
  styleUrls: ['./internetbanking.component.css']
})
export class InternetbankingComponent implements OnInit {

  constructor() {
   
   }

  ngOnInit() {
  }
  
  @Input() payableAmount;

  @Output() payEvent = new EventEmitter();

  payment(){    
    this.payEvent.emit();
  }
}
