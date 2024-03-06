import React, { useState } from "react";
import "./TimeLine.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";

const TimeLine = () => {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage: "https://photoscissors.com/images/samples/3-before.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png",
      likes: 14,
      timestamp: "2d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        {/* <div className="timeline__stories">
        <Stories />
      </div> */}
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
};

export default TimeLine;
