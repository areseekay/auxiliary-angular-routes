import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EasyComponent } from './easy/easy.component';
import {TaskListComponent} from "./task-view/task-list/task-list.component";
import {TaskViewComponent} from "./task-view/task-view.component";
import {CatComponent} from "./task-view/cat/cat.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    TaskListComponent,
    CatComponent,
    EasyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
