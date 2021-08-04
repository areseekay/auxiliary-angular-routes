import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'split', loadChildren: () => import("./child/child.module").then(module => module.ChildModule) },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
