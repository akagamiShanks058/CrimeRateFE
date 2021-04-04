import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
const baseURL = 'https://localhost:44353/api/Customers';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer!: Customer;
  CustomerList!: Observable<Customer[]>;
  constructor(private httpClient: HttpClient) {
  }
  getCustomerList(): Observable<Customer[]> {
    this.CustomerList = this.httpClient.get<Customer[]>(baseURL);
    console.log(this.CustomerList);
    return this.CustomerList;
  }
  getCustomerById(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }
  addCustomer(data: any): Observable<any> {
    console.log(data);
    return this.httpClient.post(baseURL, data);
  }
  updateCustomer(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }
  deleteCustomer(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
  deleteAllCustomer(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }
  searchByCustomer(name: any): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}
