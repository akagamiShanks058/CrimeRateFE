import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { error } from 'selenium-webdriver';
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
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  getCustomerList(): Observable<Customer> {
    return this.httpClient.get<Customer>(baseURL + '/users')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }
  // getCustomerList(): Observable<Customer[]> {
  //   this.CustomerList = this.httpClient.get<Customer[]>(baseURL);
  //   console.log(this.CustomerList);
  //   return this.CustomerList;
  // }
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
