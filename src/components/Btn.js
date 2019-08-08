import React from "react";

import { Button } from "antd";

const Btn = ({ type, text, handleClick }) => {
  return (
    <Button type={type} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default Btn;
