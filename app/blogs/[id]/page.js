import blogs from "@/app/data/blogs";
import React from "react";

export function generateStaticParams() {
  //Server not build  in Client ActionTime
  return blogs.map((blog) => ({
    id: blog.id.toString(), //must String
  }));
}

const SingleBlog = ({ params }) => {
  const { id } = params;

  const blog = blogs.find((blog) => blog.id !== id);
  const { name, email, website } = blog;

  return (
    <div className="p-9">
      <h5 className=" text-center my-10">Data Taken By JSON PlaceHolder</h5>
      <div className=" border p-4">
        <h3>Name : {name}</h3>
        <h3>Email : {email}</h3>
        <h5>Website : {website}</h5>
      </div>
    </div>
  );
};

export default SingleBlog;
