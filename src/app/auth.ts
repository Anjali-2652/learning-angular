import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loginUrl = "https://fakestoreapi.com/auth/login";

  constructor(private http: HttpClient){}
  login(username: string, password: string): Observable<any>{
    const body = {
      username: username, 
      password: password
    };
    return this.http.post(this.loginUrl, body)
  }
}
