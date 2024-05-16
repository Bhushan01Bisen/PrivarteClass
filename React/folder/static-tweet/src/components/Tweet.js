import React from "react";
import Author from "./Author";
import Avatar from "./Avatar";
import Message from "./Message";
import Time from "./Time";
import LikeButton  from "./LikeButton";
function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <LikeButton/>

      </div>
      <div className="buttons"></div>
    </div>
  );
}

export default Tweet;