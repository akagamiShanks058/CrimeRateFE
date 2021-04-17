import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BRoutingModule } from './b-routing.module';
import { HomeComponent } from './home/home.component';
import { BComponent } from './b.component';
import { Error404Component } from './error404/error404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComplaintmanageComponent } from './complaintmanage/complaintmanage.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintAddComponent } from './complaint-add/complaint-add.component';
import { ComplaintEditComponent } from './complaint-edit/complaint-edit.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';


@NgModule({
  declarations: [HomeComponent, BComponent, Error404Component, DashboardComponent, ComplaintmanageComponent, ComplaintsComponent, ComplaintAddComponent, ComplaintEditComponent, ComplaintDetailsComponent],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
