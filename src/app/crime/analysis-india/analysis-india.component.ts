import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { PredictionService } from 'src/app/_services/prediction.service';
import { Prediction } from 'src/app/_shared/contact';
import { State } from 'src/app/_shared/interface';

@Component({
  selector: 'app-analysis-india',
  templateUrl: './analysis-india.component.html',
  styleUrls: ['./analysis-india.component.css']
})
export class AnalysisIndiaComponent implements OnInit {

  States: State[] = [
    { id: 0, title: "-- select state --", y2019: 3037601, y2020: 2834893, y2021: 2993198, y2022: 3044595, y2023: 3002979, p2020: -6.67, p2021: 5.58, p2022: 1.71, p2023: -0.013 },
    { id: 1, title: "Andaman Nicobar Island", y2019: 626, y2020: 521, y2021: 860, y2022: 921, y2023: 615, p2020: -16.77, p2021: 65.07, p2022: 7.09, p2023: -33.22 },
    { id: 8, title: "Andhra Pradesh", y2019: 128360, y2020: 134228, y2021: 134566, y2022: 134921, y2023: 133922, p2020: 4.57, p2021: 0.25, p2022: 0.26, p2023: -0.74 },
    { id: 2, title: "Arunanchal Pradesh", y2019: 3340, y2020: 2990, y2021: 3329, y2022: 3684, y2023: 2684, p2020: -10.48, p2021: 11.34, p2022: 10.66, p2023: -27.14 },
    { id: 3, title: "Assam", y2019: 104246, y2020: 120206, y2021: 120545, y2022: 120900, y2023: 119900, p2020: 15.31, p2021: 0.28, p2022: 0.29, p2023: -0.83 },
    { id: 4, title: "Bihar", y2019: 195849, y2020: 211473, y2021: 211812, y2022: 212167, y2023: 2111670, p2020: 7.98, p2021: 0.16, p2022: 0.17, p2023: -0.47 },
    { id: 5, title: "Chandigarh", y2019: 4269, y2020: 4121, y2021: 4459, y2022: 4814, y2023: 3815, p2020: -3.47, p2021: 8.2, p2022: 7.96, p2023: -20.75 },
    { id: 6, title: "Chhattisgarh", y2019: 64072, y2020: 63698, y2021: 64037, y2022: 64392, y2023: 63392, p2020: -0.58, p2021: 0.53, p2022: 0.55, p2023: -1.55 },
    { id: 7, title: "Dadara Nagar Havelli", y2019: 410, y2020: 449, y2021: 488, y2022: 543, y2023: 493, p2020: 9.51, p2021: 8.69, p2022: 11.27, p2023: -9.21 },
    { id: 9, title: "Daman Diu", y2019: 297, y2020: 307, y2021: 324, y2022: 345, y2023: 338, p2020: 3.37, p2021: 5.54, p2022: 6.48, p2023: -2.03 },
    { id: 10, title: "Goa", y2019: 5540, y2020: 5413, y2021: 5752, y2022: 6107, y2023: 5107, p2020: -2.29, p2021: 6.26, p2022: 6.17, p2023: -16.37 },
    { id: 11, title: "Gujarat", y2019: 138022, y2020: 121062, y2021: 124851, y2022: 140315, y2023: 148699, p2020: -12.29, p2021: 3.13, p2022: 12.38, p2023: 5.97 },
    { id: 12, title: "Haryana", y2019: 98004, y2020: 108653, y2021: 108992, y2022: 109347, y2023: 108347, p2020: 10.87, p2021: 0.31, p2022: 0.33, p2023: -0.91 },
    { id: 13, title: "Himachal Pradesh", y2019: 16363, y2020: 16185, y2021: 16523, y2022: 16879, y2023: 15879, p2020: -1.09, p2021: 2.09, p2022: 2.15, p2023: -5.92 },
    { id: 14, title: "Jammu Kashmir", y2019: 28803, y2020: 28081, y2021: 28420, y2022: 28775, y2023: 27775, p2020: -2.51, p2021: 1.21, p2022: 1.25, p2023: -3.48 },
    { id: 15, title: "Jharkhand", y2019: 56030, y2020: 56203, y2021: 56541, y2022: 56896, y2023: 55896, p2020: 0.31, p2021: 0.6, p2022: 0.63, p2023: -1.76 },
    { id: 16, title: "Karnataka", y2019: 139450, y2020: 148415, y2021: 148754, y2022: 149109, y2023: 148109, p2020: 6.43, p2021: 0.23, p2022: 0.24, p2023: -0.67 },
    { id: 17, title: "Kerala", y2019: 106205, y2020: 118269, y2021: 118608, y2022: 118963, y2023: 117963, p2020: 11.36, p2021: 0.29, p2022: 0.3, p2023: -0.84 },
    { id: 18, title: "Lakshadweep", y2019: 91, y2020: 99, y2021: 102, y2022: 108, y2023: 104, p2020: 8.79, p2021: 3.03, p2022: 5.88, p2023: -3.7 },
    { id: 19, title: "Madhya Pradesh", y2019: 278019, y2020: 287135, y2021: 287473, y2022: 287829, y2023: 286829, p2020: 3.28, p2021: 0.12, p2022: 0.12, p2023: -0.35 },
    { id: 20, title: "Maharashtra", y2019: 299518, y2020: 297465, y2021: 297804, y2022: 298159, y2023: 297159, p2020: -0.69, p2021: 0.11, p2022: 0.12, p2023: -0.34 },
    { id: 21, title: "Manipur", y2019: 5641, y2020: 5360, y2021: 5699, y2022: 6054, y2023: 5654, p2020: -4.98, p2021: 6.32, p2022: 6.23, p2023: -6.61 },
    { id: 22, title: "Meghalaya", y2019: 6688, y2020: 6653, y2021: 6992, y2022: 7347, y2023: 6347, p2020: -0.52, p2021: 5.1, p2022: 5.08, p2023: -13.61 },
    { id: 23, title: "Mizoram", y2019: 5430, y2020: 5440, y2021: 5779, y2022: 6134, y2023: 5934, p2020: 0.18, p2021: 6.23, p2022: 6.14, p2023: -3.26 },
    { id: 24, title: "Nagaland", y2019: 4419, y2020: 4565, y2021: 4599, y2022: 4962, y2023: 4638, p2020: 3.3, p2021: 0.74, p2022: 7.89, p2023: -6.53 },
    { id: 25, title: "NCT of Delhi", y2019: 227447, y2020: 234682, y2021: 235020, y2022: 235375, y2023: 234376, p2020: 3.18, p2021: 0.14, p2022: 0.15, p2023: -0.42 },
    { id: 26, title: "Odisha", y2019: 87874, y2020: 88404, y2021: 88743, y2022: 89098, y2023: 88098, p2020: 0.6, p2021: 0.38, p2022: 0.4, p2023: -1.12 },
    { id: 27, title: "Puducherry", y2019: 2994, y2020: 3158, y2021: 3496, y2022: 3851, y2023: 2852, p2020: 5.48, p2021: 10.7, p2022: 10.15, p2023: -25.94 },
    { id: 28, title: "Punjab", y2019: 42883, y2020: 42013, y2021: 42351, y2022: 42707, y2023: 41707, p2020: -2.03, p2021: 0.8, p2022: 0.84, p2023: -2.34 },
    { id: 29, title: "Rajasthan", y2019: 222451, y2020: 222340, y2021: 223034, y2022: 222678, y2023: 222034, p2020: -0.05, p2021: 0.15, p2022: 0.16, p2023: -0.45 },
    { id: 30, title: "Sikkim", y2019: 1431, y2020: 1377, y2021: 1716, y2022: 2071, y2023: 1771, p2020: -3.77, p2021: 24.62, p2022: 20.69, p2023: -14.49 },
    { id: 31, title: "Tamil Nadu", y2019: 156781, y2020: 168226, y2021: 168564, y2022: 168920, y2023: 167920, p2020: 7.3, p2021: 0.2, p2022: 0.21, p2023: -0.59 },
    { id: 32, title: "Telangana", y2019: 107905, y2020: 109361, y2021: 109699, y2022: 110054, y2023: 109054, p2020: 1.35, p2021: 0.31, p2022: 0.32, p2023: -0.91 },
    { id: 33, title: "Tripura", y2019: 5922, y2020: 5818, y2021: 6157, y2022: 6512, y2023: 6012, p2020: -1.76, p2021: 5.83, p2022: 5.77, p2023: -7.68 },
    { id: 34, title: "Uttar Pradesh", y2019: 275260, y2020: 280571, y2021: 280909, y2022: 281265, y2023: 280265, p2020: 1.93, p2021: 0.12, p2022: 0.13, p2023: -0.36 },
    { id: 35, title: "Uttarakhand", y2019: 11431, y2020: 10676, y2021: 11015, y2022: 11370, y2023: 10370, p2020: -6.6, p2021: 3.18, p2022: 3.22, p2023: -8.8 },
    { id: 36, title: "West Bengal", y2019: 205530, y2020: 210247, y2021: 210585, y2022: 210940, y2023: 209940, p2020: 2.3, p2021: 0.16, p2022: 0.17, p2023: -0.47 },
  ];

  IsGujarat: boolean = false;

  url: string = "https://crimerate.ga/Analysis.html?name=India";
  urlSafe: SafeResourceUrl;

  constructor(private toster: ToastrService, public service: PredictionService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  getStateName(id: number) {
    return this.States.find(x => x.id === id);
  }

  onSubmit(form: NgForm) {
    if (!form.value.State) {
      this.toster.error("Select State Name");
      return;
    }
    this.IsGujarat = true;
    //#region  State
    this.url = "https://crimerate.ga/Analysis.html?name=" + this.getStateName(form.value.State)?.title.split(" ").join("");
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    //#endregion
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Prediction()
  }

}
