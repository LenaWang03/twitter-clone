import { Search } from "@mui/icons-material";
import "./widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget__widgetContainer">
        <h3>Whats Happening</h3>
      </div>
      <TwitterTweetEmbed tweetId={"933354946111705097"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 400 }}
      />
      <TwitterShareButton
        url={"https://facebook.com/cleverprogrammer"}
        options={{ text: "#reactjs is awesome", via: "lenaaaaa06" }}
      />
    </div>
  );
};

export default Widget;
