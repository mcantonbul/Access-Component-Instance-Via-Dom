import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { PurpleComponent } from './purple/purple.component';
import { YellowComponent } from './yellow/yellow.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    BlueComponent,
    PurpleComponent,
    YellowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
