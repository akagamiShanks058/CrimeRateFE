import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { PredictionService } from 'src/app/_services/prediction.service';
import { Prediction } from 'src/app/_shared/contact';
import { City } from 'src/app/_shared/interface';

@Component({
  selector: 'app-analysis-gujarat',
  templateUrl: './analysis-gujarat.component.html',
  styleUrls: ['./analysis-gujarat.component.css']
})
export class AnalysisGujaratComponent implements OnInit {

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

  url: string = "https://crimerate.ga/Analysis.html?name=India";
  urlSafe: SafeResourceUrl;

  constructor(private toster: ToastrService, public service: PredictionService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  getGujaratCityName(id: number) {
    return this.City.find(x => x.id === id);
  }

  onSubmit(form: NgForm) {
    if (!form.value.City) {
      this.toster.error("Select City Name");
      return;
    }
    this.IsGujarat = true;
    //#region  State
    this.url = "https://crimerate.ga/Analysis.html?name=" + this.getGujaratCityName(form.value.City)?.title.split(" ").join("");
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    //#endregion
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Prediction()
  }

}
