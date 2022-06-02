import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPassengers(): Observable<Object>{
    return this.http.get(`${environment.apiUrl}/passengers`)
  }
}
