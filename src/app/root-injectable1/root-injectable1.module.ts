import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootInjectable1Component } from '../components/root-injectable1/root-injectable1.component';

const routes: Routes = [
  {
    path: '',
    component: RootInjectable1Component,
    outlet: 'root1',
  },
];


@NgModule({
  declarations: [RootInjectable1Component],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RootInjectable1Module { }
