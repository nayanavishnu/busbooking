import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() payableAmount;

  @Output() payEvent = new EventEmitter();

  payment() {
    this.payEvent.emit();
  }
}
