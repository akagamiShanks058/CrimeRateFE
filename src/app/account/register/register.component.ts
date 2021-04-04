import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;
  constructor(public registerservice: RegisterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.registerservice.selectedRegister = {
      FirstName: '',
      LastName: '',
      Username: '',
      Password: ''
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value.CustId);
    this.loading=true;
    this.registerservice.register(form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.loading=false;
        this.toastr.success('New Record Added Succcessfully', 'Customer Registration');
      },
      error =>{
        this.loading=false;
        this.toastr.error('Somthing want Wrong try again');
      })
  }
}
