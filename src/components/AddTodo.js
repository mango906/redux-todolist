import React from "react";

import { Input } from "antd";

import Button from "./Btn";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = React.useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleClick = e => {
    addTodo(text);
    setText("");
  };

  return (
    <div style={{ paddingTop: 30, paddingLeft: 30 }}>
      <Input
        style={{ width: 250 }}
        placeholder="할일을 입력해주세요."
        onChange={handleChange}
        value={text}
      />
      <Button type="primary" text="추가" handleClick={handleClick} />
    </div>
  );
};

export default AddTodo;
