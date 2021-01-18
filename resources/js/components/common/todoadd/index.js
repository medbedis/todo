import React, {Component} from 'react';


class TodoAdd extends Component{

    state = {description: "",date:""}

    

    handleFormSubmit(e){
        e.preventDefault();
        const {description, date} = this.state;
        this.props.onTodoAdd({description,date});
    }


render(){
    const {description,date} = this.state;
    const {onTodoAdd} = this.props;
    return(
        <form onSubmit={(e)=>this.handleFormSubmit(e)}>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                type="text"
                className="form-control"
                value={description}
                placeholder="Enter the todo description"
                onChange={(e)=>
                this.setState({description:e.target.value})
                }
                    />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e)=>
                this.setState({date:e.target.value})
                }
                    />
            </div>
        <button type="submit" className="btn btn-primary">Save changes</button>

        </form>
    );
}
}

export default TodoAdd;
