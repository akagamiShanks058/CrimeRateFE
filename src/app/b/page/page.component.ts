import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit():void {
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
