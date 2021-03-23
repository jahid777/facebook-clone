import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
        title="MD JAHIDUL ISLAM"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
