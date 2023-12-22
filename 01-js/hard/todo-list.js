/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todo = [];
  }

  add(todo){
    this.todo.push(todo);
  }
  remove(indexOfTodo) {
    this.todo.splice(indexOfTodo,1);
  }
  update(ind,updatedtodo){
    if(ind>=this.todo.length)
    return null
    this.todo[ind] = updatedtodo;
  }
  getAll() {
    return this.todo;
  }
  get(ind) {
    if(ind>=this.todo.length)
    return null;
    return this.todo[ind];
  }
  clear(){
    this.todo=[];
  }

}

module.exports = Todo;
