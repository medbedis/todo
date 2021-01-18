import React, { Component } from 'react';
import TodoEvent from '../../../../interfaces/TodoEvent';
import TodoService from '../../../../services/TodoService';



class TodoItem extends Component {

    handleTodoCheck = (e) => {
        const {todo} = this.props;
        this.props.markTodoComplete(todo);
    }

    handleTodoDelete() {

        const event  = {
            name:'todo_delete',
            data : this.props.todo,
        };

        TodoService.getObservable().next(event)
    }

  render() {
      const {todo,dragHandle} = this.props;

      return (
      <li className={(todo.is_completed == 1)?'done' : 'pending'}>
          {dragHandle}
        <div className="icheck-primary d-inline ml-2">
          <input type="checkbox" value="" onChange={e => {}}
          onClick={this.handleTodoCheck}
          name={todo.id} id={'todoCheck'+todo.id} checked={(todo.is_completed == 1)? true : false}/>
          <label htmlFor={'todoCheck'+todo.id}></label>
        </div>
        <span className="text cursor" onClick={this.handleTodoCheck}>{todo.description}</span>
        <small className={'badge '+todo.badge}><i className="far fa-clock"></i> {todo.pending}</small>

        <div className="tools">
            <i className="fas fa-trash" onClick={()=> this.handleTodoDelete()}></i>
        </div>
      </li>
    );
  }
}

export default TodoItem;
