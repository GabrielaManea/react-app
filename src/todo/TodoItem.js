import React, {Component} from 'react';
import '../App.css';

export default class TodoItem extends Component{
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return(
            <li className="list-item">
                <div className="todo-item_content">
                    <p>{title}</p>
                </div>
                <div className="todo-item_action">
                    <button onClick={handleEdit}><i className="fa fa-edit"></i></button>
                    <button onClick={handleDelete}><i className="fa fa-trash"></i></button>
                </div> 
            </li>
        )
    }
}