import { Component, OnInit } from '@angular/core';
import { CfgUserService } from '../cfg-services/cfg-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cfg-container',
  templateUrl: './cfg-container.component.html',
  styleUrls: ['./cfg-container.component.css']
})
export class CfgContainerComponent implements OnInit {

  // Variables
  userDetails;
  booleanIsLoggedIn: boolean;

  // Constructeur
  constructor(
    private userService: CfgUserService,
    private router: Router
  ) { }

  ngOnInit() {
    // Booleen permettant d'afficher ou non la navbar
    this.booleanIsLoggedIn = this.userService.isLoggedIn();
  }

}
