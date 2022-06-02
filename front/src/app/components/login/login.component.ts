import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameControl: FormControl = new FormControl('', Validators.required);
  passwordControl: FormControl = new FormControl('', Validators.required);

  public loginForm: FormGroup = new FormGroup({
    username: this.usernameControl,
    password: this.passwordControl
  })

  constructor(
    private authService: LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    const username = this.usernameControl.value;
    const password = this.usernameControl.value;

    if(username && password){
      this.authService.login(username,password).subscribe(
        (data) => {
          console.log('logged in');
          this.authService.setSession((data as {accessToken: string}));
          this.route.navigateByUrl('/passengers');
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
