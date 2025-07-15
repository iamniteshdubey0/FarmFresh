import React from "react";
import BlogCard from "../elements/BlogCard";
import CircularLayer from "../elements/CircularLayer";

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative bg-white h-fit py-12 overflow-hidden"
    >
      <CircularLayer pos1={"-top-[30%]"} pos2={"-left-[10%]"}></CircularLayer>
      <CircularLayer pos1={"top-[30%]"} pos2={"-right-[20%]"}></CircularLayer>
      <div className="container max-w-7xl px-4 py-6 space-y-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <span className="text-sm font-semibold capitalize text-primary">
            News & Blog
          </span>
          <h3 className="text-2xl font-semibold text-foreground/80">
            All latest news and blog <br />
            about gardening
          </h3>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 mt-6 gap-4">
          <BlogCard
            image={"farming"}
            title={"how to do up your garden dring the pendamic lockdown"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque! consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque!"
            }
            link={"hero"}
          ></BlogCard>

          <BlogCard
            image={"cooking"}
            title={"how to do up your garden dring the pendamic lockdown"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque! consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque!"
            }
            link={"hero"}
          ></BlogCard>

          <BlogCard
            image={"nature"}
            title={"how to do up your garden dring the pendamic lockdown"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque! consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque!"
            }
            link={"hero"}
          ></BlogCard>

          <BlogCard
            image={"organic"}
            title={"how to do up your garden dring the pendamic lockdown"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque! consectetur adipisici elit. Officiiseligendi unde illum at deserunt fugit temporibus quos asperioresest neque!"
            }
            link={"hero"}
          ></BlogCard>
        </div>
      </div>
    </section>
  );
};

export default Blog;
