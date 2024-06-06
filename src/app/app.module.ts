import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderInjectableModule } from './provider-injectable/provider-injectable.module';
import { RootInjectable1Module } from './root-injectable1/root-injectable1.module';
import { RootInjectable2Module } from './root-injectable2/root-injectable2.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProviderInjectableModule,
    RootInjectable1Module,
    RootInjectable2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
