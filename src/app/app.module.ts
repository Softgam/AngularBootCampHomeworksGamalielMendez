import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeDirectiveDirective } from './directives/capitalize-directive.directive';
import { CustomDirectivaComponent } from './custom-directiva/custom-directiva.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirectiveDirective,
    CustomDirectivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
