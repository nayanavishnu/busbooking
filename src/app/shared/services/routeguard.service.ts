import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private router: Router, private dataService: DataServiceService) { }

  canActivate(): boolean {
    let retVal: boolean;
    retVal = true;

    if (!this.dataService.loginUser) {
      retVal = false;
      this.router.navigate(['']);
    }
    return retVal;
  }
}
