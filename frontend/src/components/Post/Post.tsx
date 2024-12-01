import "./post.css";
import profile from "../../assets/profile.jpg";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

interface props {
  username: string;
  handle: string;
  content: string;
  time: string;
}

const Post = ({ username, handle, content, time }: props) => {
  return (
    <div className="post">
        <Avatar src={profile} />
        <div className="post__content">
          <div className="post__name">
            <h4 style={{ marginRight: "8px" }}>{username}</h4>
            <p>
              @{handle} · {time}{" "}
            </p>
          </div>
          <p>{content}</p>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
    </div>
  );
};

export default Post;
