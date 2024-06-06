import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootInjectable2Component } from '../components/root-injectable2/root-injectable2.component';

const routes: Routes = [
  {
    path: '',
    component: RootInjectable2Component,
    outlet: 'root2',
  },
];

@NgModule({
  declarations: [RootInjectable2Component],
  imports: [
    CommonModule, RouterModule.forChild(routes)]
  
})
export class RootInjectable2Module { }
