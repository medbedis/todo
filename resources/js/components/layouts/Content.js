import React, {Component} from 'react';
import TodoEvent from '../../interfaces/TodoEvent';
import TodoService from '../../services/TodoService';
import Modal from '../common/modal';
import TodoAdd from '../common/todoadd';
import TodoList from '../pages/todo/Index';
import Header from './Header';
import SideBar from './SideBar';
import { Redirect } from "react-router-dom";


const TodoFooter = (props) => {
  return <div className="card-footer clearfix">
  <button type="button" className="btn btn-info float-right" onClick={()=>props.handleAddTodo()}><i className="fas fa-plus" /> Add item</button>
</div>
}

export default class Content extends Component {

    constructor(props) {
        super(props)
        this.state ={
            navigate:false,
            showModal:false,todos:[]
        }
    }


  async componentDidMount() {
      TodoService.getObservable().subscribe(async (event) =>{
        const postData = {id:event.data.id};
        await TodoService.removeTodo(postData)
        let newTodos = this.state.todos.filter(todo =>{
            return event.data.id !== todo.id;
        });
        this.setState({todos:newTodos});
      })
    const response = await TodoService.getTodoList();
    this.setState({ todos: response });
  }


  componentWillUnmount() {
      TodoService.getObservable().unsubscribe();
  }


    async handleAddTodo(data){
        const todo = await TodoService.saveNewTodo(data);
        let newtodos = this.state.todos;
        newtodos.unshift(todo);
        this.setState({todo:newtodos});
    }
    render(){
        const {navigate,showModal,todos} = this.state;
        const user = JSON.parse(localStorage.getItem("userData"));
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
        return (
            <div>
            <Header />
            <SideBar  user={user} />
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                  </div>{/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>{/* /.col */}
                </div>{/* /.row */}
              </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3>150</h3>
                        <p>All Items</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                        <p>Closed Items</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars" />
                      </div>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-warning">
                      <div className="inner">
                        <h3>44</h3>
                        <p>All users</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add" />
                      </div>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3>Lorem</h3>
                        <p>Lorem</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph" />
                      </div>
                    </div>
                  </div>
                  {/* ./col */}
                </div>
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                  {/* Left col */}
                  <section className="col-lg-12 connectedSortable">
                    {/* TO DO List */}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="ion ion-clipboard mr-1" />
                          To Do List
                        </h3>
                        <div className="card-tools">
                          <ul className="pagination pagination-sm">
                            <li className="page-item"><a href="#" className="page-link">«</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">»</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        {todos.length > 0 && <TodoList todosProp={todos} />}
                        <Modal title="Add new TOdo" visibility={showModal} onClose={()=>this.setState({showModal:!showModal})}>
                        <TodoAdd onTodoAdd={(data) => this.handleAddTodo(data)}/>
                       </Modal>
                       </div>
                      {/* /.card-body */}
                      <TodoFooter showModal={showModal} handleAddTodo={()=>this.setState({showModal:true})}/>
                    </div>
                    {/* /.card */}
                  </section>
                  {/* /.Left col */}
                  {/* right col (We are only adding the ID to make the widgets sortable)*/}

                  {/* right col */}
                </div>
                {/* /.row (main row) */}
              </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
          </div>

        )
    }
}
