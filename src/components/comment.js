import React, { Component } from "react";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "" }
  }
  componentWillMount() {
    this._updateDate();
    this._timer = setInterval(
      this._updateDate.bind(this),
      5000
    )
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
  _updateDate = () => {
    let date = this.props.comment.date;
    let duration = (+new Date() - date) / 1000;
    this.setState({
      date: duration > 60 ? `${Math.round(duration / 60)} minutes ago` : `${Math.round(Math.max(duration, 1))}  seconds ago`
    })

  }
  render() {
    return (
      <div className={"comment"}>
        <label className={"name"}>{this.props.comment.userName}:</label>
        <button
          className={"delete"}
          onClick={this.props.delComment.bind(this, this.props.index)}
        >
          delete
        </button>
        <p className={"content"}>{this.props.comment.content} </p>
        <span className={"date"}>{this.state.date}</span>
      </div>
    );
  }
}
export default Comment;
