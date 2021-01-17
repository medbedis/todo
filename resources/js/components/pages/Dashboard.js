import React, {Component} from 'react';

export default class Dashboard extends Component {
    render(){
        return (
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
              <ul className="todo-list" data-widget="todo-list">
                <li>
                  {/* drag handle */}
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  {/* checkbox */}
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                    <label htmlFor="todoCheck1" />
                  </div>
                  {/* todo text */}
                  <span className="text">Design a nice theme</span>
                  {/* Emphasis label */}
                  <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                    <label htmlFor="todoCheck2" />
                  </div>
                  <span className="text">Make the theme responsive</span>
                  <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                    <label htmlFor="todoCheck3" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-warning"><i className="far fa-clock" /> 1 day</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                    <label htmlFor="todoCheck4" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                    <label htmlFor="todoCheck5" />
                  </div>
                  <span className="text">Check your messages and notifications</span>
                  <small className="badge badge-primary"><i className="far fa-clock" /> 1 week</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                    <label htmlFor="todoCheck6" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-secondary"><i className="far fa-clock" /> 1 month</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
              </ul>
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Add item</button>
            </div>
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

        )
    }
}