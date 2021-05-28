import React from "react";
import "./passmessage.css";

const PassMessage = (props) => {
  return (
    <>
      <button onClick={props.func} type="submit" id="btn">
        Submit
      </button>
    </>
  );
};

export default PassMessage;
