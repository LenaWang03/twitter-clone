import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PeopleIcon from "@mui/icons-material/People";
import FlashIcon from "@mui/icons-material/FlashOn";
import XIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";
import React, { useState } from "react";

import SidebarOption from "./SidebarOption";

import "./sidebar.css";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState<string>("Home");

  const handleClick = (text: string) => {
    setActiveOption(text); // Update the active option when clicked
  };
  return (
    <div className="sidebar">
      <XIcon className="sidebar__twitterIcon" />
      <SidebarOption
        active={activeOption === "Home"}
        text="Home"
        Icon={HomeIcon}
        onClick={() => handleClick("Home")}
      />
      <SidebarOption
        active={activeOption === "Explore"}
        text="Explore"
        Icon={SearchIcon}
        onClick={() => handleClick("Explore")}
      />
      <SidebarOption
        active={activeOption === "Notifications"}
        text="Notifications"
        Icon={NotificationsNoneIcon}
        onClick={() => handleClick("Notifications")}
      />
      <SidebarOption
        active={activeOption === "Messages"}
        text="Messages"
        Icon={MailOutlineIcon}
        onClick={() => handleClick("Messages")}
      />
      <SidebarOption
        active={activeOption === "Bookmarks"}
        text="Bookmarks"
        Icon={BookmarkBorderIcon}
        onClick={() => handleClick("Bookmarks")}
      />
      <SidebarOption
        active={activeOption === "Communities"}
        text="Communities"
        Icon={PeopleIcon}
        onClick={() => handleClick("Communities")}
      />
      <SidebarOption
        active={activeOption === "Premium"}
        text="Premium"
        Icon={XIcon}
        onClick={() => handleClick("Premium")}
      />
      <SidebarOption
        active={activeOption === "Verified Orgs"}
        text="Verified Orgs"
        Icon={FlashIcon}
        onClick={() => handleClick("Verified Orgs")}
      />
      <SidebarOption
        active={activeOption === "Profile"}
        text="Profile"
        Icon={PermIdentityIcon}
        onClick={() => handleClick("Profile")}
      />
      <SidebarOption
        active={activeOption === "More"}
        text="More"
        Icon={MoreHorizIcon}
        onClick={() => handleClick("More")}
      />
      <Button variant="outlined" className="sidebar__post" fullWidth>
        Post
      </Button>
    </div>
  );
};

export default Sidebar;
