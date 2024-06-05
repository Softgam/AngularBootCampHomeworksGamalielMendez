import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProviderInjectableComponent } from '../components/provider-injectable/provider-injectable.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderInjectableComponent,
  },
];

@NgModule({
  declarations: [ProviderInjectableComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ProviderInjectableModule { }
