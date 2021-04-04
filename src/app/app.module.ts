import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { AccountModule } from './account/account.module';
import { BModule } from './b/b.module';
import { ToastrModule } from 'ngx-toastr';
import { Page404Component } from './Page/page404/page404.component';
import { Page500Component } from './Page/page500/page500.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    Page500Component,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatRadioModule,
    AccountModule,
    BModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
