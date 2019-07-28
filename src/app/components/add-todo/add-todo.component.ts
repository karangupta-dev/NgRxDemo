import { Component, OnInit, Input } from '@angular/core';
import { AppStateActions } from '../../actionCreators/appStateActions';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Input() public todoList;
  public todoText: string;
  constructor(private appStateActions: AppStateActions) { }

  ngOnInit() {

  }

  public addTodo() {
    if (this.todoText) {
      this.todoList.push({ id: Math.floor(Math.random() * Math.floor(999)), todo: this.todoText });
      this.appStateActions.updateToDoList(this.todoList);
    }
  }

}
