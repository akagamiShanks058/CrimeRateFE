import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../_shared/contact';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  url = 'https://localhost:44353/api/Complaints';

  constructor(private http: HttpClient) { }

  formData: Complaint = new Complaint();
  list: Complaint[]

  getAllContact() {
    this.http.get<Complaint[]>(this.url)
      .toPromise().then(res => this.list = res as Complaint[]);
  }
  // getAllContact(): Observable<Contact[]> {  
  //   return this.http.get<Contact[]>(this.url);  
  // }  
  getContactById(employeeId: number): Observable<Complaint> {
    return this.http.get<Complaint>(this.url + employeeId);
  }
  createContact(employee: Complaint): Observable<Complaint> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Complaint>(this.url,
      employee, httpOptions);
  }
  updateContact(employee: Complaint): Observable<Complaint> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Complaint>(this.url + '?id=' + employee.ComplaintId,
      employee, httpOptions);
  }
  deleteContactById(employeeid: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '?id=' + employeeid,
      httpOptions);
  }
}
