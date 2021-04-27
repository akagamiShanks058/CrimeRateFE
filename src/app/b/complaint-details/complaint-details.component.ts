import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/_services/complaint.service';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  constructor(public service: ComplaintService) { }

  ngOnInit(): void {
    this.service.getAllContact();
    console.log(this.service.list);
  }

}
