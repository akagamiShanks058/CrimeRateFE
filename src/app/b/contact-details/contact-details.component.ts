import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(public service: ContactService) { }

  ngOnInit(): void {
    this.service.getAllContact();
  }

}
