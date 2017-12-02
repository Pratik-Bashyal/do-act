import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
        this.addTodoHandler = this.addTodoHandler.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    addTodoHandler(event) {
        event.preventDefault();
        const todoItem = this.state.inputValue;
        if (todoItem.length > 5) {
            this.setState({ inputValue: "" });
            this.props.onAddTodo(todoItem);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodoHandler}>
                    <input type="text" value={this.state.inputValue} onChange={this.handleInput} placeholder="What do you need to do ?" />
                    <button className="hollow button expanded">Add Item</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;