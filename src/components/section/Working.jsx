import { ArrowRight, GemIcon, Group, List, Truck } from "lucide-react";
import CircularLayer from "../elements/CircularLayer";
import MiniCard from "../elements/MiniCard";

const Working = () => {
  return (
    <section className="relative bg-white h-screen space-y-12 py-12 overflow-hidden">
      {/* bg-layer */}
      <CircularLayer pos1={"-top-[40%]"} pos2={"-left-[10%]"}></CircularLayer>
      <CircularLayer pos1={"-top-[30%]"} pos2={"-right-[10%]"}></CircularLayer>
      <CircularLayer
        pos1={"-bottom-[40%]"}
        pos2={"right-[10%]"}
      ></CircularLayer>

      <div className="container max-w-7xl px-4 py-6 z-50 mt-12 space-y-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          {/* add bg-layer effects */}
          <span className="text-sm font-semibold capitalize text-primary">
            How It Works
          </span>
          <h3 className="text-2xl font-semibold text-foreground/80">
            Delivery the best fresh produce <br /> to your doorstep
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="gap-4 flex flex-col text-center items-center py-6 px-6 bg-card hover:shadow-2xl rounded-2xl transition-all duration-300 hover:z-50">
            <GemIcon className="text-primary" size={80}></GemIcon>
            <h4 className="text-lg font-semibold capitalize">
              Become a Member
            </h4>
            <p className="text-sm text-foreground/70">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, saepe?
            </p>
          </div>

          <div className="gap-4 flex flex-col text-center items-center py-6 px-6 bg-card hover:shadow-2xl rounded-2xl transition-all duration-300 hover:z-50">
            <GemIcon className="text-primary" size={80}></GemIcon>
            <h4 className="text-lg font-semibold capitalize">
              Become a Member
            </h4>
            <p className="text-sm text-foreground/70">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, saepe?
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Working;
