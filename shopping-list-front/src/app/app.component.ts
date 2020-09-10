import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { CfgUserService } from './cfg-services/cfg-user.service';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'Chefing Shopping List';
  userDetails;
  booleanIsLoggedIn: boolean;

  constructor(
    private userService: CfgUserService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    AOS.init();
    this.booleanIsLoggedIn = this.userService.isLoggedIn();
    this.userService.getUserProfile().subscribe(
      res => {
        console.log('user', res);
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
