import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasEstructuralesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
