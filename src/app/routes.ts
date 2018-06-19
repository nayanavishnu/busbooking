import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { SearchbusComponent } from './searchbus/searchbus.component';
// import { BusviewComponent } from './busview/busview.component';
// import { PaymentComponent } from './payment/payment.component';
import { RouteguardService } from 'src/app/shared/services/routeguard.service';
import { HttpComponent } from 'src/app/http/http.component';
import { FormsComponent } from 'src/app/forms/forms.component';
import { ObservableComponent } from 'src/app/observable/observable.component';
import { LifecycleComponent } from 'src/app/lifecycle/lifecycle.component';

const myroute: Routes = [{ path: '', component: LoginComponent },
{ path: 'search', loadChildren: 'src/app/searchbus/searchbus.module#SearchbusModule' },
// { path: 'view', loadChildren: 'src/app/searchbus/searchbus.module#SearchbusModule' },
// { path: 'payment', loadChildren: 'src/app/searchbus/searchbus.module#SearchbusModule' },
{ path: 'http', component: HttpComponent },
{ path: 'forms', component: FormsComponent },
{ path: 'observable', component: ObservableComponent },
{ path: 'lifecycle', component: LifecycleComponent },

{ path: '**', component: LoginComponent }
];
export const routes = myroute;