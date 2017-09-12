import React, { Component } from "react";
import Comment from "./comment";
import { connect } from "react-redux";
import actions from "../actions/actions";
class CommentList extends Component {
  render() {
    return (
      <div className={"commentList"}>
        {this.props.comments.map((comment, key) => {
          return (
            <Comment
              key={key}
              comment={comment}
              delComment={this.props.delComment}
            />
          );
        })}
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
let mapDipatchToProps = dispatch => {
  console.log(actions.deleteComment);
  return {
    delComment: index => {
      dispatch(actions.deleteComment(index));
    }
  };
};

connect(mapStateToProps, mapDipatchToProps)(CommentList);
export default CommentList;
