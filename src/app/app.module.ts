import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { SearchbusComponent } from './searchbus/searchbus.component';
// import { BusviewComponent } from './busview/busview.component';
// import { PaymentComponent } from './payment/payment.component';
import { routes } from 'src/app/routes';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
// import { PipesPipe } from './shared/pipes.pipe';
// import { InternetbankingComponent } from './payment/mode/internetbanking/internetbanking.component';
// import { CreditcardComponent } from './payment/mode/creditcard/creditcard.component';
// import { CodComponent } from './payment/mode/cod/cod.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material/material.module';
import { GetComponent } from 'src/app/http/get/get.component';
import { PostComponent } from 'src/app/http/post/post.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { TemplateComponent } from 'src/app/forms/template/template.component';
import { ReactiveComponent } from 'src/app/forms/reactive/reactive.component';
import { ObservableComponent } from './observable/observable.component';
import { AlertComponent } from './alert/alert.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetComponent,
    PostComponent,
    HttpComponent,
    TemplateComponent,
    ReactiveComponent,
    FormsComponent,
    ReactiveComponent,
    ObservableComponent,
    AlertComponent,
    LifecycleComponent
    // SearchbusComponent,
    // BusviewComponent,
    // PaymentComponent,
    // PipesPipe,
    // InternetbankingComponent,
    // CreditcardComponent,
    // CodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
