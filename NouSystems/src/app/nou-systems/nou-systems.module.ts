import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { NouSystemsRoutingModule } from '../nou-systems-routing.module';
import { ContainerComponent } from './container/container.component';
// import { ButtonComponent } from './button/button.component';

const routes: Routes = [{ path:'', component: ContainerComponent }];

@NgModule({
  declarations: [
    ContainerComponent
    // ButtonComponent
  ],
  imports: [
    CommonModule,
    NouSystemsRoutingModule
  ]
})
export class NouSystemsModule { }
