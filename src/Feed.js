import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import "./Post.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
        message="Wow this work and it is first message"
        timestamp="timestamp"
        username="MD JAHIDUL ISLAM"
        image="https://www.appventurez.com/blog/wp-content/uploads/2019/05/image11.png"
      />
      <Post
        profilePic="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
        message="Wow this work and it is Second message"
        timestamp="timestamp"
        username="MD JAHIDUL ISLAM"
        image="https://www.tco-team.com/blog/wp-content/uploads/2019/01/the-most-popular-programming-languages-in-2018.jpg"
      />

      <Post
        profilePic="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
        message="   Wow this work and it is Third message"
        timestamp="timestamp"
        username="MD JAHIDUL ISLAM"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
      <Post
        profilePic="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
        message="Wow this work and it is Forth message"
        timestamp="timestamp"
        username="MD JAHIDUL ISLAM"
        image="https://images.unsplash.com/photo-1516918656725-e9b3ae9ee7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />

      <Post
        profilePic="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
        message=" Happy Hacking!"
        timestamp="timestamp"
        username="MD JAHIDUL ISLAM"
        image="https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png"
      />
    </div>
  );
};

export default Feed;
