import React from "react";

import { connect } from "react-redux";

import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";

import * as types from "../actions/ActionTypes";

class TodoList extends React.Component {
  render() {
    const { todos, add, update, del } = this.props;

    const todoItem = todos.map((todo, i) => (
      <TodoItem
        key={i}
        {...todo}
        onDelete={id => del(id)}
        onUpdate={(id, text) => update(id, text)}
      />
    ));

    return (
      <div className="todo-list" style={{ width: 400 }}>
        <AddTodo addTodo={text => text && add(text)} />
        <div>{todoItem}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: text => {
      dispatch({ type: types.add, text });
    },
    update: (id, text) => dispatch({ type: types.update, id, text }),
    del: id => dispatch({ type: types.del, id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
