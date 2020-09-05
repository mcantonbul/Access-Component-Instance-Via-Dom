import { Component, OnInit } from '@angular/core';
import { BaseColor } from '../base-color/base-color';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit, BaseColor {

  ComponentName = 'RedComponent';
  Count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
