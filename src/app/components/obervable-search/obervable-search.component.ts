import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'obervable-search',
  templateUrl: './obervable-search.component.html',
  styleUrls: ['./obervable-search.component.css']
})
export class ObervableSearchComponent implements OnInit, OnDestroy {

  public searchText: string;
  public result: Array<any>;
  private todoList: Array<any>;
  private appStateSubscription: any;
  
  constructor(
    public _store: Store<any>
  ) {
    this.result = this.todoList = [];
  }

  ngOnInit() {
    this.appStateSubscription = this._store.select('appState')
      .subscribe((appState) => {
        if (appState) {
          this.todoList = appState.todoList;
        }
      });
  }

  public searchTodo() {
    if (this.searchText) {
      let searchText = this.searchText.toLowerCase();
      this.result = this.todoList.filter((element) => { return element.todo.toLowerCase().search(searchText) >= 0 })
    }
  }

  ngOnDestroy(): void {
    this.appStateSubscription.unsubscribe();
  }

}
