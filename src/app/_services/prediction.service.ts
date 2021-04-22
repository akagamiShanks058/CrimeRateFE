import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prediction } from '../_shared/contact';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  url = 'https://localhost:44353/api/Predictions';  
  
  constructor(private http: HttpClient) { }  

  formData:Prediction=new Prediction();
  list:Prediction[]

  getAllPrediction(){
    this.http.get<Prediction[]>(this.url)
      .toPromise().then(res => this.list = res as Prediction[]);
  }
  // getAllContact(): Observable<Contact[]> {  
  //   return this.http.get<Contact[]>(this.url);  
  // }  
  getPredictionById(employeeId: number): Observable<Prediction> {  
    return this.http.get<Prediction>(this.url + employeeId);  
  }  
  createPrediction(employee: Prediction): Observable<Prediction> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Prediction>(this.url,  
    employee, httpOptions);  
  }  
  updatePrediction(employee: Prediction): Observable<Prediction> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Prediction>(this.url + '?id='+employee.PredictionId,  
    employee, httpOptions);  
  }  
  deletePredictionById(employeeid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '?id=' +employeeid,  
 httpOptions);  
  }
}
