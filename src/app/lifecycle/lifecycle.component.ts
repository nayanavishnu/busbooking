import { Component, OnInit, OnChanges, OnDestroy,AfterContentInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  @Input() title;
  title2
  constructor() {   
    console.log("Constructor invoked child");
  }

  ngOnInit() {    
    console.log("ngOnInit invoked child");
  }

  ngOnChanges() {
    this.title2 = this.title + "hello";
    console.log("ngOnChanges invoked child");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy invoked child");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit invoked child");
  }

}
