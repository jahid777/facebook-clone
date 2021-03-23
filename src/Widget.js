import React from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widgets">
      {" "}
      <iframe
        title="website"
        src="https://www.bd24live.com/bangla/"
        width="340px"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widget;
