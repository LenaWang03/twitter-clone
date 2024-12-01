import React from "react";
import "./feed.css";
import TweetBox from "../TweetBox/TweetBox.tsx";
import Post from "../Post/Post.tsx";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h4
          style={{
            borderBottom: "3px var(--twitter-color) solid",
            paddingBottom: "20px",
          }}
        >
          For You
        </h4>
        <h4 style={{ color: "grey" }}>Following</h4>
      </div>
      <TweetBox />
      <div className="feed__showMore">
        <p>Show 1,324 posts</p>
      </div>
      <Post
        username="Gunnar Axén"
        handle="gunnaraxen"
        time="12h" 
        content="Om regeringen går vidare med utredningsförslaget som presenterades i onsdags så kommer en statlig myndighet (Integritetsskyddsmyndigheten, IMY) få ansvar för att definiera vad som är 'journalistisk verksamhet' och därmed skyddat av Yttrandefrihetsgrundlagen. Det är principiellt"
      />
      <Post username="Elon Musk" handle="elonmusk" time="2d" content="howdy" />
      <Post username="Test Var" handle="dummy name" time="17d" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"/>
      <Post username="Lena Wang" handle="lena03" time="1mo" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"/>

    </div>
  );
};

export default Feed;
