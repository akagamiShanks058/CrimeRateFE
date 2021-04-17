import { Component, OnInit } from '@angular/core';
import { CrimeType } from 'src/app/_shared/interface';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  CrimeTypes : CrimeType[] = [
    {id : 0, title : "-- select complaint type --"},
    {id : 1, title : "Murder"},
    {id : 2, title : "Rape"},
    {id : 3, title : "Kidnapping"},
    {id : 4, title : "Dacoity"},
    {id : 5, title : "Robbery"},
    {id : 6, title : "Burglary"},
    {id : 7, title : "Theft"},
    {id : 8, title : "Riots & Arson"},
    {id : 9, title : "Cheating & Counterfeiting"},
    {id : 10, title : "Dowry Deaths"},
    {id : 11, title : "Assault on Women"},
    {id : 12, title : "Other Crime"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
