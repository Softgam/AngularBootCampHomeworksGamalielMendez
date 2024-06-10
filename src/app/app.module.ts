import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './directivas-atributos/directivas-atributos.component';
import { CustomCapitalizePipe } from './pipes/custom-capitalize.pipe';
import { PipeExerciseComponent } from './components/pipe-exercise/pipe-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent,
    CustomCapitalizePipe,
    PipeExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
