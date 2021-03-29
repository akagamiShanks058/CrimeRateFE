import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BComponent } from './b.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '', component: BComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'page', component: PageComponent },
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