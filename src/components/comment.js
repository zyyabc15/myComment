import React, { Component } from "react";
class Comment extends Component {
  render() {
    return (
      <div className={"comment"}>
        <label className={"name"}>{this.props.comment.userName}:</label>
        <button
          className={"delete"}
          onClick={this.props.delComment(this.props.key)}
        >
          delete
        </button>
        <p className={"content"}>{this.props.comment.content} </p>
        <span className={"date"}>1秒前</span>
      </div>
    );
  }
}
export default Comment;
