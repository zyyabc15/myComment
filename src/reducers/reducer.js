import types from "../types/types.js";
const reducer = (state, action) => {
  let comments = localStorage.getItem("comments");
  comments = comments ? JSON.parse(comments) : [];
  state = { comments: [...comments] };
  switch (action.type) {
    case types.ADD_COMMENT:
      return add_comment(state, action);
    case types.DELETE_COMMENT:
      return delete_comment(state, action);
    default:
      return state;
  }
};

const add_comment = (state, action) => {
  let comment = action.value;
  let comments = state.comments.slice(0);
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
  state.comments = comments;
  return { comments: [...comments] };
};
const delete_comment = (state, action) => {
  let index = action.value;
  let comments = [
    ...state.comments.slice(0, index),
    ...state.comments.slice(index + 1)
  ];
  localStorage.setItem("comments", JSON.stringify(comments));
  return { comments: [...comments] };
};
export default reducer;
