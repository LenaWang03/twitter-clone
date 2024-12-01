import "./TweetBox.css";
import profile from "../../assets/profile.jpg";
import Avatar from "@mui/material/Avatar";
const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_form">
          <Avatar src={profile} />
          <div className="tweetBox__input">
            <input placeholder="What's happening?" type="text"></input>
          </div>
        </div>
        <div className="tweetBox__Button">
          <button className="tweetBox__tweetButton">Post</button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
