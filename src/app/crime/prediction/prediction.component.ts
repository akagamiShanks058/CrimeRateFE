import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
    { id: 1, title: "2020" },
    { id: 2, title: "2021" },
    { id: 3, title: "2022" },
    { id: 4, title: "2023" }
  ];

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

  City: City[] = [
    { id: 0, title: "-- select gujarat city --", y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, p2020: 0, p2021: 0, p2022: 0, p2023: 0 },
    { id: 1, title: "Ahmedabad Commr", y2019: 16441, y2020: 16521, y2021: 16530, y2022: 16536, y2023: 16529, p2020: 0.487, p2021: 0.054, p2022: 0.036, p2023: -0.042 },
    { id: 2, title: "Ahmedabad Rural", y2019: 4277, y2020: 4361, y2021: 4371, y2022: 4377, y2023: 4369, p2020: 1.964, p2021: 0.229, p2022: 0.137, p2023: -0.183 },
    { id: 3, title: "Ahwa Dang", y2019: 548, y2020: 488, y2021: 497, y2022: 503, y2023: 496, p2020: -10.949, p2021: 1.844, p2022: 1.207, p2023: -1.392 },
    { id: 4, title: "Amreli", y2019: 1890, y2020: 1857, y2021: 1866, y2022: 1872, y2023: 1865, p2020: -1.746, p2021: 0.485, p2022: 0.322, p2023: -0.374 },
    { id: 5, title: "Anand", y2019: 3423, y2020: 3501, y2021: 3510, y2022: 3516, y2023: 3509, p2020: 2.279, p2021: 0.257, p2022: 0.171, p2023: -0.199 },
    { id: 6, title: "Arvalli", y2019: 2168, y2020: 2102, y2021: 2111, y2022: 2117, y2023: 2110, p2020: -3.044, p2021: 0.428, p2022: 0.284, p2023: -0.331 },
    { id: 7, title: "Banaskantha", y2019: 4700, y2020: 4797, y2021: 4806, y2022: 4812, y2023: 4805, p2020: 2.064, p2021: 0.188, p2022: 0.125, p2023: -0.145 },
    { id: 8, title: "Bharuch", y2019: 3254, y2020: 3191, y2021: 3200, y2022: 3206, y2023: 3199, p2020: -1.936, p2021: 0.282, p2022: 0.188, p2023: -0.218 },
    { id: 9, title: "Bhavnagar", y2019: 3677, y2020: 3732, y2021: 3741, y2022: 3747, y2023: 3740, p2020: 1.496, p2021: 0.241, p2022: 0.16, p2023: -0.187 },
    { id: 10, title: "Botad", y2019: 977, y2020: 997, y2021: 1006, y2022: 1012, y2023: 1005, p2020: 2.047, p2021: 0.903, p2022: 0.596, p2023: -0.692 },
    { id: 11, title: "Chhotaudepur", y2019: 1344, y2020: 1376, y2021: 1385, y2022: 1391, y2023: 1384, p2020: 2.381, p2021: 0.654, p2022: 0.433, p2023: -0.503 },
    { id: 12, title: "CID Crime", y2019: 251, y2020: 245, y2021: 254, y2022: 260, y2023: 253, p2020: -2.39, p2021: 3.673, p2022: 2.362, p2023: -2.692 },
    { id: 13, title: "Dahod", y2019: 2726, y2020: 2682, y2021: 2691, y2022: 2697, y2023: 2690, p2020: -1.614, p2021: 0.336, p2022: 0.223, p2023: -0.26 },
    { id: 14, title: "DevbhumiDwarka", y2019: 1228, y2020: 1136, y2021: 1145, y2022: 1151, y2023: 1144, p2020: -7.492, p2021: 0.792, p2022: 0.524, p2023: -0.608 },
    { id: 15, title: "Gandhinagar", y2019: 4753, y2020: 4794, y2021: 4803, y2022: 4809, y2023: 4809, p2020: 0.863, p2021: 0.188, p2022: 0.125, p2023: 0 },
    { id: 16, title: "Gir Somnath", y2019: 1543, y2020: 1500, y2021: 1509, y2022: 1516, y2023: 1508, p2020: -2.787, p2021: 0.6, p2022: 0.464, p2023: -0.528 },
    { id: 17, title: "Himmatnagar", y2019: 9061, y2020: 8419, y2021: 8428, y2022: 8434, y2023: 8427, p2020: -7.085, p2021: 0.107, p2022: 0.071, p2023: -0.083 },
    { id: 18, title: "Jamnagar", y2019: 3638, y2020: 3791, y2021: 3800, y2022: 3806, y2023: 3799, p2020: 4.206, p2021: 0.237, p2022: 0.158, p2023: -0.184 },
    { id: 19, title: "Junagadh", y2019: 2437, y2020: 2598, y2021: 2607, y2022: 2613, y2023: 2606, p2020: 6.606, p2021: 0.346, p2022: 0.23, p2023: -0.268 },
    { id: 20, title: "Kheda", y2019: 3291, y2020: 3308, y2021: 3317, y2022: 3323, y2023: 3316, p2020: 0.517, p2021: 0.272, p2022: 0.181, p2023: -0.211 },
    { id: 21, title: "Kutch East G", y2019: 3247, y2020: 3289, y2021: 3298, y2022: 3304, y2023: 3297, p2020: 1.294, p2021: 0.274, p2022: 0.182, p2023: -0.212 },
    { id: 22, title: "Kutch West Bhuj", y2019: 2349, y2020: 2379, y2021: 2388, y2022: 2394, y2023: 2387, p2020: 1.277, p2021: 0.378, p2022: 0.251, p2023: -0.292 },
    { id: 23, title: "Mahisagar", y2019: 1216, y2020: 1259, y2021: 1268, y2022: 1274, y2023: 1267, p2020: 3.536, p2021: 0.715, p2022: 0.473, p2023: -0.549 },
    { id: 24, title: "Mehsana", y2019: 6144, y2020: 6211, y2021: 6220, y2022: 6226, y2023: 6219, p2020: 1.09, p2021: 0.145, p2022: 0.096, p2023: -0.112 },
    { id: 25, title: "Morbi", y2019: 1766, y2020: 1805, y2021: 1814, y2022: 1820, y2023: 1813, p2020: 2.208, p2021: 0.499, p2022: 0.331, p2023: -0.385 },
    { id: 26, title: "Narmada", y2019: 859, y2020: 915, y2021: 924, y2022: 930, y2023: 923, p2020: 6.519, p2021: 0.984, p2022: 0.649, p2023: -0.753 },
    { id: 27, title: "Navsari", y2019: 1888, y2020: 1873, y2021: 1882, y2022: 1888, y2023: 1881, p2020: -0.794, p2021: 0.481, p2022: 0.319, p2023: -0.371 },
    { id: 28, title: "Palanpur", y2019: 5360, y2020: 5231, y2021: 5240, y2022: 5246, y2023: 5239, p2020: -2.407, p2021: 0.172, p2022: 0.115, p2023: -0.133 },
    { id: 29, title: "Panchmahal", y2019: 2114, y2020: 2186, y2021: 2195, y2022: 2201, y2023: 2194, p2020: 3.406, p2021: 0.412, p2022: 0.273, p2023: -0.318 },
    { id: 30, title: "Patan", y2019: 2366, y2020: 2415, y2021: 2424, y2022: 2430, y2023: 2423, p2020: 2.071, p2021: 0.373, p2022: 0.248, p2023: -0.288 },
    { id: 31, title: "Porbandar", y2019: 1079, y2020: 1059, y2021: 1068, y2022: 1074, y2023: 1067, p2020: -1.854, p2021: 0.85, p2022: 0.562, p2023: -0.652 },
    { id: 32, title: "Rajkot Commr", y2019: 3942, y2020: 3964, y2021: 3973, y2022: 3979, y2023: 3972, p2020: 0.558, p2021: 0.227, p2022: 0.151, p2023: -0.176 },
    { id: 33, title: "Rajkot Rural", y2019: 2526, y2020: 2597, y2021: 2606, y2022: 2612, y2023: 2604, p2020: 2.811, p2021: 0.347, p2022: 0.23, p2023: -0.306 },
    { id: 34, title: "Sabarkantha", y2019: 2992, y2020: 2988, y2021: 2997, y2022: 3003, y2023: 2995, p2020: -0.134, p2021: 0.301, p2022: 0.2, p2023: -0.266 },
    { id: 35, title: "Surat Commr", y2019: 5377, y2020: 5871, y2021: 5880, y2022: 5886, y2023: 5879, p2020: 9.187, p2021: 0.153, p2022: 0.102, p2023: -0.119 },
    { id: 36, title: "Surat Rural", y2019: 3496, y2020: 3594, y2021: 3603, y2022: 3609, y2023: 3601, p2020: 2.803, p2021: 0.25, p2022: 0.167, p2023: -0.222 },
    { id: 37, title: "Surendranagar", y2019: 2524, y2020: 2634, y2021: 2643, y2022: 2649, y2023: 2642, p2020: 4.358, p2021: 0.342, p2022: 0.227, p2023: -0.264 },
    { id: 38, title: "Tapi", y2019: 1168, y2020: 1161, y2021: 1170, y2022: 1176, y2023: 1169, p2020: -0.599, p2021: 0.775, p2022: 0.513, p2023: -0.595 },
    { id: 39, title: "Vadodara Commr", y2019: 11187, y2020: 11316, y2021: 11325, y2022: 11331, y2023: 11324, p2020: 1.153, p2021: 0.08, p2022: 0.053, p2023: -0.062 },
    { id: 40, title: "Vadodara Rural", y2019: 2482, y2020: 2568, y2021: 2577, y2022: 2583, y2023: 2576, p2020: 3.465, p2021: 0.35, p2022: 0.233, p2023: -0.271 },
    { id: 41, title: "Valsad", y2019: 3234, y2020: 3303, y2021: 3312, y2022: 3318, y2023: 3310, p2020: 2.134, p2021: 0.272, p2022: 0.181, p2023: -0.241 },
  ];

  IsGujarat: boolean = false;
  IsPredictDiv: boolean = false;
  Isp2020Up: boolean = false;
  Isp2021Up: boolean = false;
  Isp2022Up: boolean = false;
  Isp2023Up: boolean = false;
  IsCrimeRateUp: boolean = false;

  url: string = "https://crimerate.ga/Predict.html?name=India";
  StateName?: string = '';
  Year?: string = '';
  CrimeRate?: number = 0;
  CrimeTotal?: number = 0;
  urlSafe: SafeResourceUrl;
  p2020?: number = 0;
  p2021?: number = 0;
  p2022?: number = 0;
  p2023?: number = 0;

  PCrimeRate: number;
  p20: number;
  p21: number;
  p22: number;
  p23: number;

  constructor(private toster: ToastrService, public service: PredictionService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.StateName = "India";

    this.p2020 = this.getStateName(0)?.p2020;
    this.p2021 = this.getStateName(0)?.p2021;
    this.p2022 = this.getStateName(0)?.p2022;
    this.p2023 = this.getStateName(0)?.p2023;

    this.Isp2020Up = false;
    this.p20 = this.p2020 == null ? 0 : this.p2020;
    if (this.p20 > 0)
      this.Isp2020Up = true;

    this.Isp2021Up = false;
    this.p21 = this.p2021 == null ? 0 : this.p2021;
    if (this.p21 > 0)
      this.Isp2021Up = true;

    this.Isp2022Up = false;
    this.p22 = this.p2022 == null ? 0 : this.p2022;
    if (this.p22 > 0)
      this.Isp2022Up = true;

    this.Isp2023Up = false;
    this.p23 = this.p2023 == null ? 0 : this.p2023;
    if (this.p23 > 0)
      this.Isp2023Up = true;
  }

  getYear(id: number) {
    return this.Years.find(x => x.id === id);
  }

  getStateName(id: number) {
    return this.States.find(x => x.id === id);
  }

  getGujaratCityName(id: number) {
    return this.City.find(x => x.id === id);
  }

  onSubmit(form: NgForm) {
    if (!form.value.Year) {
      this.toster.error("Select Year For pridiction");
      return;
    }
    if (!form.value.State) {
      this.toster.error("Select State Name For pridiction");
      return;
    }

    this.IsPredictDiv = true;
    this.Year = this.getYear(form.value.Year)?.title;

    if (!form.value.City) {
      //#region  State
      this.url = "https://crimerate.ga/Predict.html?name=" + this.getStateName(form.value.State)?.title.split(" ").join("");
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      this.StateName = this.getStateName(form.value.State)?.title;

      if (this.Year == "2020") {
        this.CrimeTotal = this.getStateName(form.value.State)?.y2020;
        this.CrimeRate = this.getStateName(form.value.State)?.p2020;
      }
      else if (this.Year == "2021") {
        this.CrimeTotal = this.getStateName(form.value.State)?.y2021;
        this.CrimeRate = this.getStateName(form.value.State)?.p2021;
      }
      else if (this.Year == "2022") {
        this.CrimeTotal = this.getStateName(form.value.State)?.y2022;
        this.CrimeRate = this.getStateName(form.value.State)?.p2022;
      }
      else if (this.Year == "2023") {
        this.CrimeTotal = this.getStateName(form.value.State)?.y2023;
        this.CrimeRate = this.getStateName(form.value.State)?.p2023;
      }


      this.p2020 = this.getStateName(form.value.State)?.p2020;
      this.p2021 = this.getStateName(form.value.State)?.p2021;
      this.p2022 = this.getStateName(form.value.State)?.p2022;
      this.p2023 = this.getStateName(form.value.State)?.p2023;

      //#endregion
      if (this.StateName == "Gujarat")
        this.IsGujarat = true;
      else
        this.IsGujarat = false;
    }
    else {

      //#region  City
      this.url = "https://crimerate.ga/Predict.html?name=" + this.getGujaratCityName(form.value.City)?.title.split(" ").join("");
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      this.StateName = this.getGujaratCityName(form.value.City)?.title;

      if (this.Year == "2020") {
        this.CrimeTotal = this.getGujaratCityName(form.value.City)?.y2020;
        this.CrimeRate = this.getGujaratCityName(form.value.City)?.p2020;
      }
      else if (this.Year == "2021") {
        this.CrimeTotal = this.getGujaratCityName(form.value.City)?.y2021;
        this.CrimeRate = this.getGujaratCityName(form.value.City)?.p2021;
      }
      else if (this.Year == "2022") {
        this.CrimeTotal = this.getGujaratCityName(form.value.City)?.y2022;
        this.CrimeRate = this.getGujaratCityName(form.value.City)?.p2022;
      }
      else if (this.Year == "2023") {
        this.CrimeTotal = this.getGujaratCityName(form.value.City)?.y2023;
        this.CrimeRate = this.getGujaratCityName(form.value.City)?.p2023;
      }


      this.p2020 = this.getGujaratCityName(form.value.City)?.p2020;
      this.p2021 = this.getGujaratCityName(form.value.City)?.p2021;
      this.p2022 = this.getGujaratCityName(form.value.City)?.p2022;
      this.p2023 = this.getGujaratCityName(form.value.City)?.p2023;
      //#endregion
    }

    //#region PredictDiv



    this.IsCrimeRateUp = false;
    this.PCrimeRate = this.CrimeRate == null ? 0 : this.CrimeRate;
    if (this.PCrimeRate > 0)
      this.IsCrimeRateUp = true;
    //#endregion

    this.Isp2020Up = false;
    this.p20 = this.p2020 == null ? 0 : this.p2020;
    if (this.p20 > 0)
      this.Isp2020Up = true;

    this.Isp2021Up = false;
    this.p21 = this.p2021 == null ? 0 : this.p2021;
    if (this.p21 > 0)
      this.Isp2021Up = true;

    this.Isp2022Up = false;
    this.p22 = this.p2022 == null ? 0 : this.p2022;
    if (this.p22 > 0)
      this.Isp2022Up = true;

    this.Isp2023Up = false;
    this.p23 = this.p2023 == null ? 0 : this.p2023;
    if (this.p23 > 0)
      this.Isp2023Up = true;

    // this.service.createPrediction(form.value).subscribe(
    //   res => {
    //     this.resetForm(form);
    //     this.toster.success("submited");
    //   },
    //   err => {
    //     this.toster.error(err);
    //     console.log(err);
    //   }
    // );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Prediction()
  }

}
