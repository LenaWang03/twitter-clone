import "./sidebar.css";
import { useState } from "react";

interface SideBarIcon {
  active?: boolean;
  Icon: any;
  text: string;
    onClick: () => void;
}

const SidebarOption = ({ active, Icon, text, onClick}: SideBarIcon) => {

  return (
    <div
      className={`sidebarOption ${active && "sidebarOption--active"}`}
      onClick={onClick}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
