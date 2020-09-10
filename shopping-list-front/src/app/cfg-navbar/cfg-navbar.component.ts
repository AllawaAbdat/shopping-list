import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CfgUserService } from '../cfg-services/cfg-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cfg-navbar',
  templateUrl: './cfg-navbar.component.html',
  styleUrls: ['./cfg-navbar.component.css']
})
export class CfgNavbarComponent implements OnInit {

  // Variables
  menuIsActived = 0;

  // Constructeur
  constructor(
    private toastr: ToastrService,
    private userService: CfgUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  infoToastr() {
    this.toastr.info('Cette section est en cours de développement et sera bientôt disponible', 'Info');
  }

  checkMenuChoosen(menuClicked: number) {
    this.menuIsActived = menuClicked;
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
