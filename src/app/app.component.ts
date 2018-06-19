import { Component, OnInit, AfterContentInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/modal/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  title = 'app';
  constructor(private dataService: DataServiceService, private router: Router) {
    setTimeout(() => {
      this.title = "Welcome";
    }, 2000);
  }
  logout() {
    this.dataService.loginUser = undefined;
    this.router.navigate(['']);
  }

  ngOnInit() {
    console.log("ngOnInit invoked parent");
  }
  ngOnChanges() {
    console.log("ngOnChanges invoked parent");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy invoked parent");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit invoked parent");
  }

  ngDoCheck() {
    console.log("ngDoCheck invoked parent");
  }

}
