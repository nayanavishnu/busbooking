import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  reactiveForm: FormGroup;
  name = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email,this.validateEmail]);
  constructor() { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: this.name,
      email: this.email
    })
  }

  saveData(data) {
    console.log(data);
  }

  validateEmail(emailControl:AbstractControl){
    if(emailControl.value.startsWith("www")){
      return null;
    }else{
      return {validUrl:true};
    }
  }

}
