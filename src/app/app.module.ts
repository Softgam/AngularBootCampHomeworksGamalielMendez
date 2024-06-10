import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyFirstModule } from './Modules/my-first.module';

import { DirectivasAtributosComponent } from './directivas-atributos/directivas-atributos.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
