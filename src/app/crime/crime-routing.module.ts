import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisCyberComponent } from './analysis-cyber/analysis-cyber.component';
import { AnalysisGujaratComponent } from './analysis-gujarat/analysis-gujarat.component';
import { AnalysisIndiaComponent } from './analysis-india/analysis-india.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CrimeComponent } from './crime/crime.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PredictionComponent } from './prediction/prediction.component';

const routes: Routes = [{
  path: '', component: CrimeComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'complaint', component: ComplaintComponent },
    { path: 'prediction', component: PredictionComponent },
    { path: 'analysis', component: AnalysisComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'analysis-india', component: AnalysisIndiaComponent },
    { path: 'analysis-gujarat', component: AnalysisGujaratComponent },
    { path: 'cyber-crime', component: AnalysisCyberComponent },
    // { path: 'verify-email', component: VerifyEmailComponent },
    // { path: 'forgot-password', component: ForgotPasswordComponent },
    // { path: 'reset-password', component: ResetPasswordComponent }
 
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrimeRoutingModule { }
