import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div
          className="header__option
        header__option__active
        "
        >
          <HomeIcon fontSize="learge" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar
            src="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/96768468_1111423649217100_2547748495175974912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=G8-jJH814M0AX95JY2m&_nc_ht=scontent.fdac11-1.fna&tp=27&oh=471c2cef2ea2de4c88410cb6077aabb7&oe=607C9E43"
            title="MD JAHIDUL ISLAM"
          />
          <h4>jahid </h4>
        </div>
        <div className="account__control">
          <IconButton className="icon">
            <AddIcon />
          </IconButton>
          <IconButton className="icon">
            <ForumIcon />
          </IconButton>
          <IconButton className="icon">
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton className="icon">
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
