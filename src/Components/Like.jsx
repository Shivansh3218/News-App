import React, { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";


import "../Components/css/Like.css";

export default function Like(props) {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    if (count === 1) return setCount(0);
    else if (count === 0) return setCount(1);
  };
  let [like, setLike] = useState(0);

  return (
    <div>
      {count === 0 ? (
        <FavoriteIcon
          style={{ color: "green", fontSize: "x-large" }}
          onClick={handleClick}
        />
      ) : (
        <FavoriteIcon
          style={{ color: "red", fontSize: "x-large" }}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
