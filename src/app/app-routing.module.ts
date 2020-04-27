import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: {animation: 'HomeComponent'} },
  { path: "1", component: Example1Component, data: {animation: 'isLeft'}  },
  { path: "2", component: Example2Component, data: {animation: 'isRight'}  },
  { path: "3", component: Example3Component, data: {animation: 'isTop'}  },
  { path: "4", component: Example4Component, data: {animation: 'isBottom'}  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
