import React, { Component } from 'react';
class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName,
            content: ""
        }
    }
    handleChangeName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    handleChangeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleBlurName = (e) => {
        this.props.handleBlurName(e.target.value);
    }
    render() {
        return (
            <div>
                <div>
                    <label>name:</label>
                    <input
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleChangeName}
                        onBlur={this.handleBlurName} />
                </div>
                <div>
                    <label>content:</label>
                    <textarea
                        rows="3"
                        value={this.state.content}
                        onChange={this.handleChangeContent} />
                </div>
                <button
                    onClick={this.props.onSubmit.bind(this,this.state.userName, this.state.content)}>
                    submit
                </button>
            </div>
        )
    }
}
export default CommentInput;