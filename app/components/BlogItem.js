import React from "react";

const BlogItem = ({ username }) => {
  return (
    <div>
      <h3 className=" my-2 p-3 border"> {username}</h3>
    </div>
  );
};

export default BlogItem;
