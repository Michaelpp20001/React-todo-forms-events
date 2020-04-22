import React, {Component} from 'react';
import "./todo.css";

class Todo extends Component {
    constructor (props) {
    super(props)
    this.state = {todo: [], inputText: ""};

    this.handleSubmit = this.handleSubmit.bind(this)
}
style = {textAlign: "center"}

handleSubmit(event) {
    event.preventDefault();
    const todos = [...this.state.todo, this.state.inputText]
    this.setState({todo: todos, inputText: ""});
}

    render () {
        const data = this.state.todo.map((todo, index) => (
                <li key={index}>
                    {todo}
                </li>
        ));
        console.log("after render", this.state.todo)
        return (
            <div className="container">
                <div className="header" style={this.style}>
                    <h1>Simple Todo App</h1>
                    <form onSubmit={this.handleSubmit}>
                    <input
                        className="todo-input"
                        type="text"
                        name="inputText"
                        placeholder="what would you like to do?..."
                        value={this.state.inputText}
                        onChange={(e) => {
                            this.setState({inputText: e.target.value})
                        }}
                    />
                    <button 
                        className="save-button"
                        type="submit">
                        Save
                    </button>
                    </form>
                    <p>{this.state.inputText}</p>
                </div>
                <ol className="todo-content">
                    {data}
                </ol>
            </div>
        )
        }
}


export default Todo;