import React, { Component } from "react";
import CommentInput from "./commentInput";
import actions from "../actions/actions";
import { connect } from "react-redux";
import CommentList from "./commentList";
class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      content: ""
    };
  }
  _getUserName = () => {
    let userName = localStorage.getItem("userName");
    this.setState({
      userName: userName === null ? "" : userName
    });
  };
  _addUserName = userName => {
    localStorage.setItem("userName", userName);
  };
  componentWillMount() {
    this._getUserName();
  }
  handleBlurName = userName => {
    this._addUserName(userName);
  };
  handleSubmit = (userName, content) => {
    this.props.handleSubmit({ userName, content });
  };
  render() {
    return (
      <div className={"wrapper"}>
        <CommentInput
          userName={this.state.userName}
          handleBlurName={this.handleBlurName}
          onSubmit={this.handleSubmit}
        />
        <CommentList comments={this.props.comments} />
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
  return {
    handleSubmit: comment => {
      dispatch(actions.addComment(comment));
    }
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(CommentApp);
