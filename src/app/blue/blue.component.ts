import { Component, OnInit } from '@angular/core';
import { BaseColor } from '../base-color/base-color';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit, BaseColor {

  ComponentName = 'BlueComponent';
  Count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
