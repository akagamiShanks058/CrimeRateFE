import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/_shared/interface';
const baseURL = 'https://localhost:44353/users/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  selectedRegister!: Register;
  RegisterList!: Observable<Register[]>;
  constructor(private httpClient: HttpClient) {
  }
  // getCustomerList(): Observable<Register[]> {
  //   this.CustomerList = this.httpClient.get<Register[]>(baseURL);
  //   console.log(this.CustomerList);
  //   return this.CustomerList;
  // }
  // getCustomerById(id: any): Observable<any> {
  //   return this.httpClient.get(`${baseURL}/${id}`);
  // }
  register(data: any): Observable<any> {
    console.log(data);
    return this.httpClient.post(baseURL, data);
  }
  // updateCustomer(id: any, data: any): Observable<any> {
  //   return this.httpClient.put(`${baseURL}/${id}`, data);
  // }
  // deleteCustomer(id: any): Observable<any> {
  //   return this.httpClient.delete(`${baseURL}/${id}`);
  // }
  // deleteAllCustomer(): Observable<any> {
  //   return this.httpClient.delete(baseURL);
  // }
  // searchByCustomer(name: any): Observable<any> {
  //   return this.httpClient.get(`${baseURL}?name=${name}`);
  // }
}
