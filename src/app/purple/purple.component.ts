import { Component, OnInit } from '@angular/core';
import { BaseColor } from '../base-color/base-color';

@Component({
  selector: 'app-purple',
  templateUrl: './purple.component.html',
  styleUrls: ['./purple.component.css']
})
export class PurpleComponent implements OnInit, BaseColor {

  ComponentName = 'PurpleComponent';
  Count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
