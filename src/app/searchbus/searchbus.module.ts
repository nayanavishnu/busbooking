import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbusComponent } from 'src/app/searchbus/searchbus.component';
import { BusviewComponent } from 'src/app/busview/busview.component';
import { PaymentComponent } from 'src/app/payment/payment.component';
import { Routes,RouterModule } from '@angular/router';
import { RouteguardService } from 'src/app/shared/services/routeguard.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material/material.module';
import { PipesPipe } from 'src/app/shared/pipes.pipe';
import { InternetbankingComponent } from 'src/app/payment/mode/internetbanking/internetbanking.component';
import { CreditcardComponent } from 'src/app/payment/mode/creditcard/creditcard.component';
import { CodComponent } from 'src/app/payment/mode/cod/cod.component';

const newRoutes: Routes = [{ path: '', component: SearchbusComponent },
{ path: 'view', component: BusviewComponent },
{ path: 'payment', component:PaymentComponent,canActivate:[RouteguardService] }];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(newRoutes),FormsModule,MaterialModule
  ],
  declarations: [ 
    SearchbusComponent,
    BusviewComponent,
    PaymentComponent,
    PipesPipe,
    InternetbankingComponent,
    CreditcardComponent,
    CodComponent
  ]
})
export class SearchbusModule { }
