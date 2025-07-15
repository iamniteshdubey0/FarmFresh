import { ArrowRight } from "lucide-react";
import React from "react";

const NewsLetter = () => {
  return (
    <section
      id="newsletter"
      className="relative bg-white h-fit space-y-12 py-6 overflow-hidden"
    >
      <div className="container max-w-7xl px-4 py-6 z-10 mt-2">
        <div className="flex flex-col gap-4 text-center items-center">
          <h3 className="text-2xl font-semibold text-foreground/80">
            Join now and get your first delivery next week!
          </h3>
          <p className="md:w-3/4 text-sm text-foreground/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eligendi unde illum at deserunt fugit temporibus quos asperiores est
            neque!
            eligendi unde illum at deserunt fugit temporibus quos asperiores est
            neque!
          </p>

          <button className="flex justify-center items-center gap-3 solid-button w-fit py-3">
            Join Now <ArrowRight></ArrowRight>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
