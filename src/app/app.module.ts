import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeDirective } from './CapitalizeDirective/capitalize.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirective,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
