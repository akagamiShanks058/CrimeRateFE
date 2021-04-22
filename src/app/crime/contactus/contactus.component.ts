import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/_services/contact.service';
import { Contact } from 'src/app/_shared/contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private toster :ToastrService, public service: ContactService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.service.createContact(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toster.success("submited");
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Contact()
  }

}
