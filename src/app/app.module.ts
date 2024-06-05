import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderInjectableModule } from './provider-injectable/provider-injectable.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProviderInjectableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
