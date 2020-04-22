import React, {Component} from 'react'

class Todo extends Component {
    style = {
        textAlign: "center"
    }
    render () {
        return (
            <h1 style={this.style}>Simple Todo App</h1>
        )
    }
}

export default Todo