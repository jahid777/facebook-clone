import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReal">
      {/* single Story */}
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0bqnBHU70HW0YrYVn9RywWbCbgojQlTQlrA&usqp=CAU"
        profileSrc="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
        title="Md jahidul islam"
      />
      <Story
        image="https://i.pinimg.com/originals/07/03/f3/0703f380418186f5100fef5161c974be.jpg"
        profileSrc="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        title="Clever Programmer"
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQATsdarYqnRlpok9gdSsjgxp14MobCUNOzBA&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5TCwvwa-vTVkTJk4Hr6AcOEJHjMAy0T1y4a4Mz7ZYA&s"
        title="English Learning"
      />
      <Story
        image="https://wallpaperset.com/w/full/6/e/e/14908.jpg"
        profileSrc="https://scontent.fdac100-1.fna.fbcdn.net/v/t1.0-1/p160x160/87479794_2516044458634660_2048369907480920064_o.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=KpsMeA1QcOgAX-_oAaw&_nc_ht=scontent.fdac100-1.fna&tp=6&oh=f48299c410b49d00eb7f08231dd026a4&oe=5F6FAFB4"
        title="Crazy Programmer"
      />

      <Story
        image="https://image.freepik.com/free-vector/2020-new-year-background-liquid-color-background-element-fluid-shapes-composition_145391-48.jpg"
        profileSrc="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        title="jhaid"
      />
      {/* <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5CiaFP3r71Q4bSa-bQrJwbXHI0xdMatGmfw&usqp=CAU" profileSrc="https://avatars2.githubusercontent.com/u/53335400?s=460&u=66cb296ad68ebb5d86c162a6b5aece93977865fd&v=4" title="Crazy Python Lover" /> */}
    </div>
  );
};

export default StoryReel;
