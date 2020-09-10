import { Router } from '@angular/router';
import { CfgUserService } from './../cfg-services/cfg-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfg-user-profile',
  templateUrl: './cfg-user-profile.component.html',
  styleUrls: ['./cfg-user-profile.component.css']
})
export class CfgUserProfileComponent implements OnInit {

  userDetails;
  constructor(private userService: CfgUserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
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
