import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isLoggendIn: boolean = false;

  constructor(
    private authService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggendIn = this.authService.isLoggedIn();
  }

  public logout(): void {
    this.authService.logout();
    this.isLoggendIn = this.authService.isLoggedIn()
    this.router.navigateByUrl('');
  }

}
