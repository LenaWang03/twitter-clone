import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget.tsx";

function App() {
  return (
    <div className="homePage">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
