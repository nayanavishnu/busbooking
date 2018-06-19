import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private dataSer:DataServiceService, private router:Router) {
    this.username = "Nayana";
    this.password = "Nayana";
   }

  ngOnInit() {
  }

  validate(){
    const user = this.dataSer.validateUser(this.username,this.password);
    if( user!= undefined){
      this.dataSer.loginUser = user;      
      this.router.navigate(["search"]);
    }else{
      alert("Login Failed");
    }
  }

  getColor(){
    return {color:'grey'}
  }
}
