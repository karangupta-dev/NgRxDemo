import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todoList = [
    {
      "id": 1,
      "todo": "Pay Bills"
    },
    {
      "id": 2,
      "todo": "Water Plants"
    },
    {
      "id": 3,
      "todo": "Feed Pet"
    }
  ]

  private appStateSubscription: any;

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this.appStateSubscription = this._store.select('appState')
      .subscribe((appState) => {
        if (appState && appState.todoList.length > 0) {
          // this.todoList = appState.todoList;
        }
      });
  }

  ngOnDestroy(): void {
    this.appStateSubscription.unsubscribe();

  }

}
