import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../_shared/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'https://localhost:44353/api/contacts';  
  
  constructor(private http: HttpClient) { }  

  formData:Contact=new Contact();
  list:Contact[]

  getAllContact(){
    this.http.get<Contact[]>(this.url)
      .toPromise().then(res => this.list = res as Contact[]);
  }
  // getAllContact(): Observable<Contact[]> {  
  //   return this.http.get<Contact[]>(this.url);  
  // }  
  getContactById(employeeId: number): Observable<Contact> {  
    return this.http.get<Contact>(this.url + employeeId);  
  }  
  createContact(employee: Contact): Observable<Contact> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Contact>(this.url,  
    employee, httpOptions);  
  }  
  updateContact(employee: Contact): Observable<Contact> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Contact>(this.url + '?id='+employee.contactId,  
    employee, httpOptions);  
  }  
  deleteContactById(employeeid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '?id=' +employeeid,  
 httpOptions);  
  }
}
