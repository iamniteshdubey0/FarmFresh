import React from "react";
import { Book } from "lucide-react";


const BlogCard = ({title, desc, link, image}) => {
  return (
    <div className="flex gap-3 p-4 rounded-2xl shadow-lg bg-background z-50">
      <img className="h-72 w-72" src={`/img/${image}.svg`} alt="" />
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-semibold capitalize">
          {title}
        </h4>
        <p className="text-sm text-foreground/70">
          {desc}
        </p>

        <a href={`#${link}`} className="w-fit outlined-button py-2 flex justify-center items-center gap-3 mt-3">
          Read More <Book></Book>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
