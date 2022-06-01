import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LOGIN_URL = "";

  constructor(
    private http: HttpClient
  ) { }

  private setRequestBody(username: string, password: string){

  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(this.LOGIN_URL, {username, password})
  }

  public setSession(authResult: {accessToken: string}): void {
    localStorage.setItem('jwt', authResult.accessToken);
  }
}
