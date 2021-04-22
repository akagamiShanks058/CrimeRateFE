import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { Complaint } from 'src/app/_shared/contact';
import { CrimeType } from 'src/app/_shared/interface';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  CrimeTypes: CrimeType[] = [
    { id: 1, title: "Murder" },
    { id: 2, title: "Rape" },
    { id: 3, title: "Kidnapping" },
    { id: 4, title: "Dacoity" },
    { id: 5, title: "Robbery" },
    { id: 6, title: "Burglary" },
    { id: 7, title: "Theft" },
    { id: 8, title: "Riots & Arson" },
    { id: 9, title: "Cheating & Counterfeiting" },
    { id: 10, title: "Dowry Deaths" },
    { id: 11, title: "Assault on Women" },
    { id: 12, title: "Other Crime" },
  ];
  constructor(private toster: ToastrService, public service: ComplaintService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.service.createContact(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toster.success("submited");
      },
      err => {
        this.toster.error(err);
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Complaint()
  }
}
