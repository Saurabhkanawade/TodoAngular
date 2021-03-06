import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;
  
  @Output()  todoAdd:EventEmitter<Todo>=new EventEmitter;
  

  constructor() { }

  ngOnInit(): void {
  }

 onSubmit(){

  const  todo={
    sno:1,
    title:this.title,
    desc:this.desc,
    isActive:true
  }

  this.todoAdd.emit(todo);
    

 }

}
