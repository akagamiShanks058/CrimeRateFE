import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PredictionService } from 'src/app/_services/prediction.service';
import { Prediction } from 'src/app/_shared/contact';
import { City, State, Year } from 'src/app/_shared/interface';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  Years: Year[] = [
    { id: 0, title: "-- select year --" },
    { id: 1, title: "2021" },
    { id: 2, title: "2022" },
    { id: 3, title: "2023" }
  ];

  States: State[] = [
    { id: 0, title: "-- select state --" },
    { id: 1, title: "Andaman & Nicobar Island" },
    { id: 2, title: "Arunanchal Pradesh" },
    { id: 3, title: "Assam" },
    { id: 4, title: "Bihar" },
    { id: 5, title: "Chandigarh" },
    { id: 6, title: "Chhattisgarh" },
    { id: 7, title: "Dadara & Nagar Havelli" },
    { id: 8, title: "Andhra Pradesh" },
    { id: 9, title: "Daman & Diu" },
    { id: 10, title: "Goa" },
    { id: 11, title: "Gujarat" },
    { id: 12, title: "Haryana" },
    { id: 13, title: "Himachal Pradesh" },
    { id: 14, title: "Jammu & Kashmir" },
    { id: 15, title: "Jharkhand" },
    { id: 16, title: "Karnataka" },
    { id: 17, title: "Kerala" },
    { id: 18, title: "Lakshadweep" },
    { id: 19, title: "Madhya Pradesh" },
    { id: 20, title: "Maharashtra" },
    { id: 21, title: "Manipur" },
    { id: 22, title: "Meghalaya" },
    { id: 23, title: "Mizoram" },
    { id: 24, title: "Nagaland'," },
    { id: 25, title: "NCT of Delhi" },
    { id: 26, title: "Odisha" },
    { id: 27, title: "Puducherry" },
    { id: 28, title: "Punjab" },
    { id: 29, title: "Rajasthan" },
    { id: 30, title: "Sikkim" },
    { id: 31, title: "Tamil Nadu" },
    { id: 32, title: "Telangana" },
    { id: 33, title: "Tripura'" },
    { id: 34, title: "Uttar Pradesh" },
    { id: 35, title: "Uttarakhand" },
    { id: 36, title: "West Bengal" },
  ];

  City: City[] = [
    { id: 0, title: "-- select city --" },
    { id: 1, title: "Ahmadabad" },
    { id: 2, title: "Amreli" },
    { id: 3, title: "Anand" },
    { id: 4, title: "Banas Kantha" },
    { id: 5, title: "Bharuch" },
    { id: 6, title: "Bhavnagar" },
    { id: 7, title: "Dahod" },
    { id: 8, title: "Gandhinagar" },
    { id: 9, title: "Jamnagar" },
    { id: 10, title: "Junagadh" },
    { id: 11, title: "Kachchh" },
    { id: 12, title: "Kheda" },
    { id: 13, title: "Mahesana" },
    { id: 14, title: "Narmada" },
    { id: 15, title: "Navsari" },
    { id: 16, title: "Panch Mahals" },
    { id: 17, title: "Patan" },
    { id: 18, title: "Porbandar" },
    { id: 19, title: "Rajkot" },
    { id: 20, title: "Sabar Kantha" },
    { id: 21, title: "Surat" },
    { id: 22, title: "Surendranagar" },
    { id: 23, title: "The Dangs" },
    { id: 24, title: "Vadodara" },
    { id: 25, title: "Valsad" },
  ];
  constructor(private toster: ToastrService, public service: PredictionService) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    this.service.createPrediction(form.value).subscribe(
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
    this.service.formData = new Prediction()
  }

}
