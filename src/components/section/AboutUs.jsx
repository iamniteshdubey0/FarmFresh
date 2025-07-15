import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="aboutus" className="relative bg-white h-fit space-y-2 py-2">
      <div className="container max-w-7xl px-4 py-6 z-50 mt-6 space-y-2">
        <div className="flex justify-center items-center gap-2">
          <div className="flex md:flex-1/2 flex-col gap-4">
            <span className="text-sm font-semibold capitalize text-primary">
              About US
            </span>
            <h3 className="text-2xl font-semibold text-foreground/80">
              How we started our <br /> journey
            </h3>
            <p className="md:w-3/4 text-sm text-foreground/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eligendi unde illum at deserunt fugit temporibus quos asperiores
              est neque!
            </p>

            <button className="flex justify-center items-center gap-2 outlined-button w-fit py-3">
              Read More <ArrowRight></ArrowRight>
            </button>
          </div>
          <div className="md:flex-1/2">
            <img
              className="object-cover w-[90%]"
              src="/img/farming.svg"
              alt="cycling"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="md:flex-1/2">
            <img
              className="object-cover w-[90%]"
              src="/img/gardening.svg"
              alt="cycling"
            />
          </div>
          <div className="flex md:flex-1/2 flex-col gap-4">
            <span className="text-sm font-semibold capitalize text-primary">
              About US
            </span>
            <h3 className="text-2xl font-semibold text-foreground/80">
              Continue to dlevep to <br /> became a globle company
            </h3>
            <p className="md:w-3/4 text-sm text-foreground/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eligendi unde illum at deserunt fugit temporibus quos asperiores
              est neque!
            </p>

            <button className="flex justify-center items-center gap-2 outlined-button w-fit py-3">
              Read More <ArrowRight></ArrowRight>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
