import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BRoutingModule } from './b-routing.module';
import { HomeComponent } from './home/home.component';
import { BComponent } from './b.component';
import { Error404Component } from './error404/error404.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [HomeComponent, BComponent, Error404Component, PageComponent],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
