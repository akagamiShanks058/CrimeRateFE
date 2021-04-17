import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrimeRoutingModule } from './crime-routing.module';
import { CrimeComponent } from './crime/crime.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AnalysisIndiaComponent } from './analysis-india/analysis-india.component';
import { AnalysisGujaratComponent } from './analysis-gujarat/analysis-gujarat.component';
import { AnalysisCyberComponent } from './analysis-cyber/analysis-cyber.component';


@NgModule({
  declarations: [CrimeComponent, HomeComponent, NavComponent, FooterComponent, ComplaintComponent, PredictionComponent, AnalysisComponent, FaqComponent, ContactusComponent, AnalysisIndiaComponent, AnalysisGujaratComponent, AnalysisCyberComponent],
  imports: [
    CommonModule,
    CrimeRoutingModule
  ]
})
export class CrimeModule { }
