import React, {Component} from 'react'

class Todo extends Component {
    constructor (props) {
    super(props)
    this.state = {inputText: ""};
}
style = {textAlign: "center"}

    render () {
        return (
            <div className="container">
                <div className="header" style={this.style}>
                    <h1>Simple Todo App</h1>
                    <input
                        type="text"
                        name="inputText"
                        value={this.state.inputText}
                        onChange={(e) => {
                            this.setState({inputText: e.target.value})
                        }}
                    ></input>
                    <button type="button" onClick={() => {
                        this.setState((prevState, props) => ({
                            inputText: prevState.inputText.toUpperCase()
                        }));
                    }}>
                        to UPPERCASE
                    </button>
                    <p>{this.state.inputText}</p>
                </div>
            </div>
        )
        }
}


export default Todo;