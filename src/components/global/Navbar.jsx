import { BananaIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="z-10 fixed top-o px-24 py-6 flex justify-between items-center gap-4 w-full bg-background shadow-sm">
      <div className="flex justify-center items-center gap-2 text-primary">
        <BananaIcon></BananaIcon>
        <span className="text-xl font-semibold">Farm-Fresh</span>
      </div>
      <div className="flex justify-center items-center gap-8">
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href=""
        >
          home
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href=""
        >
          how it works
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href=""
        >
          about us
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href=""
        >
          blog
        </a>
        <a
          className="text-md font-medium text-foreground capitalize hover:text-primary transition-colors duration-300"
          href=""
        >
          contact
        </a>
      </div>
      <div className="cta">
        <a href="" className="solid-button">Sign In</a>
      </div>
    </nav>
  );
};

export default Navbar;
