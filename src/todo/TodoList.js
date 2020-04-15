import React, {Component} from 'react';
import '../App.css';
import TodoItem from '../todo/TodoItem';


export default class TodoList extends Component{
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return(
            <ul className="todo-list">
                <h2>Todo list</h2>
                {
                    items.map(item => {
                        return (
                            <TodoItem 
                            key={item.id} t
                            title={item.title} 
                            handleDelete={() => handleDelete(item.id)} 
                            handleEdit = {() => handleEdit(item.id)} />
                        )
                    })
                }
                <div className="todo-action">
                    <button type="button" onClick={clearList}>clear list</button>
                </div>
            </ul>
        )
    }
}