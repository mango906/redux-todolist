import React from "react";

import { Input } from "antd";
import Button from "./Btn";

const TodoItem = props => {
  const [updateMode, setUpdateMode] = React.useState(false);
  const [value, setValue] = React.useState(props.text);

  const handleUpdate = () => {
    if (updateMode) {
      props.onUpdate(props.id, value);
    }
    setUpdateMode(!updateMode);
  };

  const checkDelete = () => {
    if (updateMode) {
      setUpdateMode(!updateMode);
    } else {
      props.onDelete(props.id);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        paddingLeft: 30
      }}>
      {!updateMode && <div style={{ width: 200, wordBreak: "break-all" }}>{props.text}</div>}
      {updateMode && (
        <Input style={{ width: 250 }} value={value} onChange={e => setValue(e.target.value)} />
      )}
      <div>
        <Button type="primary" text="수정" handleClick={handleUpdate} />
        <Button type="danger" text={updateMode ? "취소" : "삭제"} handleClick={checkDelete} />
      </div>
    </div>
  );
};

export default TodoItem;
