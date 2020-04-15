import React, {Component} from 'react';
import '../App.css';

export default class TodoInput extends Component{
    render() {
        const {item, handleChange, handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <div className="todo-input">
                    <div className="todo-title">
                        <h2>Todo input</h2>
                    </div>
                    <div className="todo-add">
                        <input type="text" placeholder="add a todo item here.." value={item} onChange={handleChange}/>
                        <button><i className="fa fa-plus"></i></button>
                    </div>
                </div>
            </form>
            
        )
    }
}