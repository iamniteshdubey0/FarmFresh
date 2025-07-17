import React from "react";
import {
  AppleIcon,
  ArrowRight,
  BananaIcon,
  Facebook,
  Instagram,
  PlayIcon,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="newsletter"
      className="relative bg-darkvoilet h-fit space-y-12 pt-6 overflow-hidden"
    >
      <div className="container max-w-7xl px-4 py-6 z-10 mt-2">
        <div className="grid grid-col-1 md:grid-cols-5 gap-4">
          <div className="col-span-2 space-y-4">
            <div className="flex justify-start items-start gap-2 text-primary py-3 px-2">
              <BananaIcon></BananaIcon>
              <span className="text-xl font-semibold">Farm-Fresh</span>
            </div>
            <div className="flex flex-col gap-1 px-2">
              <a
                className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
                href="tel:+36484848484"
              >
                +36484848484
              </a>
              <a
                className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
                href="mail:nomail@gmail.com"
              >
                nomail@gmail.com
              </a>
            </div>
            <div className="flex gap-4 px-2">
              <a
                className="text-background/60 hover:text-background/90 transition-all duration-300"
                href=""
              >
                <Facebook></Facebook>
              </a>
              <a
                className="text-background/60 hover:text-background/90 transition-all duration-300"
                href=""
              >
                <Instagram></Instagram>
              </a>
              <a
                className="text-background/60 hover:text-background/90 transition-all duration-300"
                href=""
              >
                <Youtube></Youtube>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start space-y-8">
            <h4 className="text-md font-semibold text-background/90 capitalize">
              get to know us
            </h4>
            <div className="flex flex-col gap-2 px-2">
              <a
                className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
                href="#about"
              >
                About us
              </a>
              <a
                className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
                href="#howitworks"
              >
                How it works
              </a>
              <a
                className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
                href="#blog"
              >
                Blog
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start space-y-8">
            <h4 className="text-md font-semibold text-background/90 capitalize">
              get to know us
            </h4>
            <div className="flex flex-col gap-2 px-2">
              <a
                className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
                href="#faq"
              >
                FAQ
              </a>
              <a
                className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start space-y-8">
            <h4 className="text-md font-semibold text-background/90 capitalize">
              Download Our App
            </h4>
            <div className="flex flex-col gap-2 px-2">
              <a
                className="w-fit bg-foreground solid-button flex justify-center items-center gap-2"
                href="#about"
              >
                <PlayIcon />
                <span>Playstore</span>
              </a>
              <a
                className="w-fit bg-foreground solid-button flex justify-center items-center gap-2"
                href="#about"
              >
                <AppleIcon />
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6 items-center gap-4">
          <a
            className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
            href="#contact"
          >
            Privacy & Policy
          </a>

          <a
            className="text-sm text-background/60 hover:text-background/90 transition-all duration-300"
            href="#contact"
          >
            Terms of Use
          </a>

          <p className="text-sm text-background/60">©2025 www.farmfresh.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
