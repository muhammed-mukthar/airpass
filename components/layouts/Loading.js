import React, { Fragment } from "react";

const Loading = () => {
  return (
    <Fragment>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        style={{ width: "200px", margin: "auto", paddingTop: "110px", display: "block" }}
        // style={{ width: "200px", margin: "auto", display: "block" }}
        alt="loading..."
      />
    </Fragment>
  );
};
export default Loading;
