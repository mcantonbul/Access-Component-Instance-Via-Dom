import { Component, OnInit } from '@angular/core';
import { BaseColor } from '../base-color/base-color';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent implements OnInit, BaseColor {

  ComponentName = 'YellowComponent';
  Count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
