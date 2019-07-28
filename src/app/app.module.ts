import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { APP_STORE_PROVIDERS } from './app.store';
import { AppComponent } from './components/app/app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AppStateActions } from './actionCreators/appStateActions';
import { ObervableSearchComponent } from './components/obervable-search/obervable-search.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ObervableSearchComponent,
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ...APP_STORE_PROVIDERS
  ],
  providers: [
    AppStateActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
