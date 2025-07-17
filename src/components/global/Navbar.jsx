import { BananaIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  return (
    <nav className="z-10 fixed top-0 px-6 md:px-24 py-6 flex justify-between items-center gap-4 w-full bg-background shadow-sm">
      <div className="flex justify-center items-center gap-2 text-primary">
        <BananaIcon></BananaIcon>
        <span className="text-xl font-semibold">Farm-Fresh</span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex justify-center items-center gap-8">
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#hero"
        >
          home
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#working"
        >
          how it works
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#aboutus"
        >
          about us
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#testimonial"
        >
          blog
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#conatct"
        >
          contact
        </a>
      </div>

      {/* mobile nav */}
      <div
        className={`md:hidden absolute h-screen top-0 left-0 ${
          isMenuToggle ? "flex w-[80%]" : "hidden w-0"
        } flex-col justify-start items-start gap-8 px-6 py-12 bg-background transition-all duration-500 `}
      >
        <a
          className="text-2xl font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#hero"
        >
          home
        </a>
        <a
          className="text-2xl font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#working"
        >
          how it works
        </a>
        <a
          className="text-2xl font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#aboutus"
        >
          about us
        </a>
        <a
          className="text-2xl font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#testimonial"
        >
          blog
        </a>
        <a
          className="text-2xl font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href="#conatct"
        >
          contact
        </a>
      </div>

      <div className="flex gap-2">
        <a href="" className="solid-button">
          Sign In
        </a>

        <button
          onClick={() => setIsMenuToggle((prev) => !prev)}
          className="md:hidden px-2 py-2"
        >
          {isMenuToggle ? <X></X> : <Menu></Menu>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
