# GetInstanceFromDom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Code
``` typescript
MONKEY_PATCH_KEY_NAME = '__ngContext__';
```


``` typescript
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
```

## ScreenShots
![1](https://github.com/mcantonbul/Access-Component-Instance-Via-Dom/blob/master/src/assets/1.png?raw=true)
![2](https://github.com/mcantonbul/Access-Component-Instance-Via-Dom/blob/master/src/assets/2.png?raw=true)

## Reference Links

1-) https://github.com/angular/angular/pull/25803

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
