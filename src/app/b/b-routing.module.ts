import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BComponent } from './b.component';
import { ComplaintAddComponent } from './complaint-add/complaint-add.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { ComplaintEditComponent } from './complaint-edit/complaint-edit.component';
import { ComplaintmanageComponent } from './complaintmanage/complaintmanage.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: BComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'complaint', component: ComplaintmanageComponent },
      { path: 'complaint-add', component: ComplaintAddComponent },
      { path: 'complaint-edit', component: ComplaintEditComponent },
      { path: 'complaint-details', component: ComplaintDetailsComponent },
      { path: 'contact-details', component: ContactDetailsComponent },
      // { path: 'verify-email', component: VerifyEmailComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'reset-password', component: ResetPasswordComponent }
      {path: '404', component: Error404Component},
      { path: '**', redirectTo: '/404' }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
