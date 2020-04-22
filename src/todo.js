import React, {Component} from 'react'

class Todo extends Component {
    constructor (props) {
    super(props)
    this.state = {inputText: "pp"};
}

    render () {
        return (
            <div className="container">
                <div className="header">
                    <h1 style={{textAlign: "center"}}>Simple Todo App</h1>
                    <p>{this.state.inputText}</p>
                    <button type="button" onClick={() => {
                        this.setState((prevState, props) => ({
                            inputText: prevState.inputText.toUpperCase()
                        }));
                    }}>
                        to UPPERCASE
                    </button>
                </div>
            </div>
        )
        }
}


export default Todo;