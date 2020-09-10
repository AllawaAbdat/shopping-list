import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfg-home',
  templateUrl: './cfg-home.component.html',
  styleUrls: ['./cfg-home.component.css']
})
export class CfgHomeComponent implements OnInit {

  // Variables
  intro = '</ Chefing Test />';

  // Constructeur
  constructor() { }

  ngOnInit(): void {
  }

}
