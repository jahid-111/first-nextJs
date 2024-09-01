import React from "react";
import blogs from "../data/blogs";
import BlogItem from "../components/BlogItem";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className=" p-9">
      <h3 className="text-xl font-bold">Blog list</h3>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <>
            <Link key={blog.id} href={`blogs/${blog.id}`}>
              <BlogItem username={blog.username} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
