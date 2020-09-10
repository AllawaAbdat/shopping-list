import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cfg-header-strap',
  templateUrl: './cfg-header-strap.component.html',
  styleUrls: ['./cfg-header-strap.component.css']
})
export class CfgHeaderStrapComponent implements OnInit {

  // Variables
  @Input() titleHeader: string;
  @Input() imgPath: string;

  // Constructeur
  constructor() { }

  ngOnInit(): void {
  }

}
