import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: 'parent-component', component: ParentComponent },
  { path: 'child-component', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
