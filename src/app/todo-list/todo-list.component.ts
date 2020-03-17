import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

import { TodoService } from './../services/todo.service';
import { FormValidateService } from '../shared/form-validate.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoNewItems = [];
  public todoInProgressItems = [];
  public todoCompletedItems = [];
  constructor(private todoService: TodoService, private formValidateService: FormValidateService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getTodos();
  }

  //TODO_GET_SUCCESS Method
  public TODO_GET_SUCCESS(response: any): void {
    console.log(response.objResponse)
    //this.toastr.success('Success', response.ResponseHeaderText);
    this.todoNewItems = response.objResponse.todoNewItems;
    this.todoInProgressItems = response.objResponse.todoInProgressItems;
    this.todoCompletedItems = response.objResponse.todoCompletedItems;
  }

  public deleteTodo(id): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.todoService.Todo_Delete(id).subscribe(
          (response: any) => {
            console.log(response)
            this[response.objResponse.responseMethod](response);
          }, (error: any) => {
            console.log(error);
          }
        )
      }
    })
  }

  public TODO_DELETE_SUCCESS(response: any): void {
    console.log(response)
    this.toastr.success(response.objResponse.responseText,'Success');
    this.getTodos();
  }

  public updateTodo(id, status): void {
    let updateObj = {
      Id: id,
      status: status
    }
    this.todoService.Todo_Update(updateObj).subscribe(
      (response: any) => {
        console.log(response)
        this[response.objResponse.responseMethod](response);
      }, (error: any) => {
        console.log(error);
      }
    )
  }

  //TODO_UPDATE_SUCCESS
  public TODO_UPDATE_SUCCESS(response): void {
    this.toastr.success(response.objResponse.responseText,'Success');
    console.log(response);
    this.getTodos();
  }

  public getTodos(): void {
    this.todoService.Todo_Get().subscribe(
      (response: any) => {
        this[response.objResponse.responseMethod](response);
      }, (error: any) => {
        console.log(error);
      }
    )
  }

}
