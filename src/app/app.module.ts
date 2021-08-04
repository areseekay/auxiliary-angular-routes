import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TaskViewComponent } from './home/task-view/task-view.component';
import { TaskListComponent } from './home/task-view/task-list/task-list.component';
import { CatComponent } from './home/task-view/cat/cat.component';
import { EasyComponent } from './easy/easy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
