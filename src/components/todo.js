import React from 'react';
import { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import TodoInput from '../todo/TodoInput';
import TodoList from '../todo/TodoList';
import uuid from 'uuid';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        items: [],
        id: uuid(),
        item: '',
    }
}

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item
        }

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
        }) 
    }

    clearList = () => {
        this.setState({
            items: []
        })
    }

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    }
    handleEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id)
        
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            id: id
        })
    }
    render() {
        return(
            <div className="todo-container">
                <TodoInput  
                item={this.state.item} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}/>
                <TodoList 
                items={this.state.items} 
                clearList = {this.clearList} 
                handleDelete={this.handleDelete} 
                handleEdit={this.handleEdit} />
            </div>
        )
    }
}

