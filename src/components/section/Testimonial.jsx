import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import TestimonialCard from "../elements/TestimonialCard";

const Testimonial = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonial"
      className="relative bg-background h-fit py-12 overflow-hidden"
    >
      <div className="container max-w-7xl px-4 py-6 space-y-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <span className="text-sm font-semibold capitalize text-primary">
            Testimonials
          </span>
          <h3 className="text-2xl font-semibold text-foreground/80">
            What they say about us
          </h3>
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-card rounded-full shadow-md hover:scale-105 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-card rounded-full shadow-md hover:scale-105 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory py-6 px-3 pb-4 scrollbar-hidden rounded-3xl"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="snap-center shrink-0 w-full md:w-[350px]">
              <TestimonialCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
