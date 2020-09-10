import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfg-about',
  templateUrl: './cfg-about.component.html',
  styleUrls: ['./cfg-about.component.css']
})
export class CfgAboutComponent implements OnInit {

  title = 'A propos';
  imgPath = '../../assets/img/about.png';

  constructor() { }

  ngOnInit(): void {
  }

}
