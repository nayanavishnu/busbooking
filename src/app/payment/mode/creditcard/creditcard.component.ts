import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() payableAmount;

  @Output() payEvent = new EventEmitter();

  payment() {
    this.payEvent.emit();
  }
}
