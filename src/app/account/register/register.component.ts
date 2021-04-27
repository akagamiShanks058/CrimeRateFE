import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  loading: boolean = false;
  constructor(public registerservice: RegisterService, private toastr: ToastrService,
    private authService: AuthService, private _router: Router) { }

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
  onSubmitold(form: NgForm) {

    this.toastr.success("Account Created Successfully.");
    this._router.navigate(["/account/login"]);
    console.log(form.value.CustId);
    // this.loading = true;
    // this.registerservice.register(form.value)
    //   .subscribe(data => {
    //     this.resetForm(form);
    //     this.loading = false;
    //     this.toastr.success('New Record Added Succcessfully', 'Customer Registration');
    //   },
    //     error => {
    //       this.loading = false;
    //       this.toastr.error(error);
    //     })
  }


  onSubmit(): void {

    this.toastr.success("Login Successfull..");
    this._router.navigate(["/account/login"]);
    // const { FirstName,LastName,Username,Password } = this.form;

    // this.authService.register(FirstName,LastName,Username,Password).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }
}
