import { Component, OnInit } from '@angular/core';
import { City, State, Year } from 'src/app/_shared/interface';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  Years : Year[] = [
    {id : 0, title : "-- select year --"},
    {id : 1, title : "2021"},
    {id : 2, title : "2022"},
    {id : 3, title : "2023"}
  ];

  States : State[] = [
    {id : 0, title : "-- select state --"},
    {id : 1, title : "Gujarat"},
    {id : 2, title : "Engineer"},
    {id : 3, title : "Doctor"}
  ];

  City : City[] = [
    {id : 0, title : "-- select city --"},
    {id : 1, title : "surat"},
    {id : 2, title : "Engineer"},
    {id : 3, title : "Doctor"}
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
