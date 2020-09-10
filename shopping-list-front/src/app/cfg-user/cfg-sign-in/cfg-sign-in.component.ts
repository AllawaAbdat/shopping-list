import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CfgUserService } from './../../cfg-services/cfg-user.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cfg-sign-in',
  templateUrl: './cfg-sign-in.component.html',
  styleUrls: ['./cfg-sign-in.component.css']
})
export class CfgSignInComponent implements OnInit  {

  // Variables
  model = {
    email : '',
    password: ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  // Constructeur
  constructor(
    public userService: CfgUserService,
    public router: Router) { }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/menu/home');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  // Fonction permettant de se connecter
  onSubmit(form: NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/menu/home');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
