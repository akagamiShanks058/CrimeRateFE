import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const AUTH_API = 'https://localhost:44353/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate', {
      username,
      password
    }, httpOptions);
  }

  register(FirstName: string, LastNAme: string, Username: string, Password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      FirstName,
      LastNAme,
      Username,
      Password
    }, httpOptions);
  }
}
