import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EasyComponent} from "./easy/easy.component";
import {TaskViewComponent} from "./task-view/task-view.component";
import {CatComponent} from "./task-view/cat/cat.component";
import {TaskListComponent} from "./task-view/task-list/task-list.component";

const routes: Routes = [
  {
    path: 'taskView', component: TaskViewComponent, children: [
      {path: 'cat', component: CatComponent, outlet: 'subView'},
      {path: 'tasks', component: TaskListComponent, outlet: 'subView'},
    ]
  },
  {path: 'easy', component: EasyComponent, outlet: 'easyOutlet'},
  {path: 'lazyChild', loadChildren: () => import("./lazy-child/lazy-child.module").then(module => module.LazyChildModule)},
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
export class AppRoutingModule {
}
