import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    input("");
    imageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`what's on your mind?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="image URL(optional)"
          />
          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video </h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3> Photo/Video </h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3> Feelling/Activity </h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
