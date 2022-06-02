import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public login(username: string, password: string): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/login`, {username, password})
  }

  public setSession(authResult: {accessToken: string}): void {
    localStorage.setItem('titanicToken', authResult.accessToken);
  }

  public isLoggedIn(): boolean{
    return !!localStorage.getItem('titanicToken');
  }

  public logout(): void {
    localStorage.removeItem('titanicToken');
  }
}
