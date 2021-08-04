import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ChildLeftComponent } from './child-left/child-left.component';
import {RouterModule} from "@angular/router";
import {CHILD_ROUTES} from "./child.routes";
import { ChildRightComponent } from './child-right/child-right.component';



@NgModule({
  declarations: [
    ChildComponent,
    ChildLeftComponent,
    ChildRightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CHILD_ROUTES)
  ]
})
export class ChildModule { }
