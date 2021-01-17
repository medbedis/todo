import React, { Component } from 'react';
import TodoService from '../../../services/TodoService';
import TodoItem from './todoItem';
import {SortableContainer, SortableElement,SortableHandle} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement((props) => {
    return (
        <TodoItem
        todo={props.todo}
        markTodoComplete={(todo) => props.markTodoComplete(todo)}
        dragHandle={props.dragHandle}
        />
    );
});

const SortableList = SortableContainer(({ items,markTodoComplete }) => {
    const DragHandle = SortableHandle(()=> (
            <span className="handle">
                <i className="fas fa-ellipsis-v"></i>
                <i className="fas fa-ellipsis-v"></i>
            </span>
    ));
    return (
        <ul className="todo-list">
            {items.map((todo,index) => {
                return(
                    <SortableItem
                        key={index}
                        index={index}
                        todo={todo}
                        markTodoComplete={markTodoComplete}
                        dragHandle={<DragHandle />}
                    />
                );
            })}
        </ul>
        );
});





class TodoList extends Component {
  state = { todos: [], loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await TodoService.getTodoList();
    this.setState({ loading: false, todos: response });
  }

  async markTodoComplete(todo) {

    const response = await TodoService.markTodoComplete(todo);

    let todos = this.state.todos;

    todos.forEach((todo,index)=>{
        if(todo.id == response.id){
            todos[index] = response;
        }
    });

    this.setState({ todos });
}

handleChangeOrder(oldIndex,newIndex) {
    if(oldIndex === newIndex){
        return ;
    }

    const {todos} = this.state;

    let newSequence = [];

    todos.forEach((todo,index)=>{
        newSequence.push({id: todo.id,order: index+1});
    });

    TodoService.changeTodoOrder(newSequence);
}

render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
            <SortableList
                useDragHandle
                helperClass="dragging-item"
                items={todos}
                onSortEnd={({oldIndex, newIndex})=>{
                    let newTodos = todos;
                    newTodos = arrayMove(newTodos,oldIndex,newIndex);
                    this.setState({todos:newTodos});
                    this.handleChangeOrder(oldIndex,newIndex);
                 }}
                markTodoComplete={(todo)=>this.markTodoComplete(todo)}
            />
      </React.Fragment>
    );
  }
}

export default TodoList;
