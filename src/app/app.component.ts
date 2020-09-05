import { Component, Renderer2, HostListener } from '@angular/core';
import { BaseColor } from './base-color/base-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements BaseColor {
  title = 'GetInstanceFromDom';
  MONKEY_PATCH_KEY_NAME = '__ngContext__';

  ComponentName = 'AppComponent';
  Count = 0;

  selectedComponent: BaseColor;
  foundFrom: string;
  constructor(private renderer2: Renderer2) {

  }

  @HostListener('click', ['$event.target'])
  clickAnyWhere(elem: any) {
    this.selectedComponent = this.findAngularComponent(elem);
    if(this.selectedComponent) {
      this.selectedComponent.Count++;
    }
  }

  findAngularComponent(element: any) {
    let comp;
    let process = true;
    this.foundFrom = element.tagName;
    while(process) {
      if(element[this.MONKEY_PATCH_KEY_NAME]){
        if(element[this.MONKEY_PATCH_KEY_NAME][0]) {
          comp = element[this.MONKEY_PATCH_KEY_NAME][8]
        } else {
          // app-root component
          comp = null;
        }
        process = false;
      } else {
        element = element.parentNode;
        this.foundFrom = `${this.foundFrom} > ${element.tagName}`
      }
    }
    return comp;
  }
}
