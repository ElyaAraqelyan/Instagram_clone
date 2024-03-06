import React from "react";
import "./Sidenav.css";
import "@fontsource/cookie";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav_logo">
        <h1 className="logo">Instagram</h1>
      </div>
      <div className="sindenav_buttons">
        <button className="sidenav__button">
          <HomeIcon style={{ fontSize: "31px" }} />
          <span>Главная</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon style={{ fontSize: "31px" }} />
          <span>Поисковой запрос</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon style={{ fontSize: "31px" }} />
          <span>Интересное</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon style={{ fontSize: "31px" }} />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon style={{ fontSize: "31px" }} />
          <span>Сообщение</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon style={{ fontSize: "31px" }} />
          <span>Уведомления</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon style={{ fontSize: "31px" }} />
          <span>Создать</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon style={{ fontSize: "31px" }} />
          <span>Еще</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
