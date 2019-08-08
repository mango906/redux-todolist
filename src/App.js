import React from "react";
import "antd/dist/antd.css";

import TodoList from "./container/TodoList";

function App({ store }) {
  return (
    <div className="App">
      <TodoList store={store} todos={store.getState()} />
    </div>
  );
}

export default App;
