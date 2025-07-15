import { Clover, GemIcon, Leaf, ListOrdered, PackageOpen, Sprout } from "lucide-react";
import CircularLayer from "../elements/CircularLayer";
import MainCard from "../elements/MainCard";

const Working = () => {
  return (
    <section id="working" className="relative bg-white h-screen space-y-12 py-12 overflow-hidden">
      {/* bg-layer */}
      <CircularLayer pos1={"top-[20%]"} pos2={"-left-[25%]"}></CircularLayer>
      <CircularLayer pos1={"-top-[30%]"} pos2={"-right-[10%]"}></CircularLayer>

      <div className="container max-w-7xl px-4 py-6 z-50 mt-12 space-y-12">
        <div className="relative flex flex-col gap-4 justify-center items-center text-center">
          {/* add bg-layer effects */}
          <div className="absolute px-4 py-3 flex justify-between items-center w-full opacity-50">
            <Leaf className="text-primary translate-4" size={44}></Leaf>
            <Clover className="text-primary -translate-20" size={44}></Clover>
            <Sprout className="text-primary translate-10" size={44}></Sprout>
          </div>
          <div className="realtive px-4 py-3">
            <span className="text-sm font-semibold capitalize text-primary">
              How It Works
            </span>
            <h3 className="text-2xl font-semibold text-foreground/80">
              Delivery the best fresh produce <br /> to your doorstep
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MainCard
            icon={GemIcon}
            title={"Become a Member"}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Distinctio, saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Distinctio, saepe?"
            }
          ></MainCard>

          <MainCard
            icon={ListOrdered}
            title={"Place your order"}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Distinctio, saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Distinctio, saepe?"
            }
          ></MainCard>

          <MainCard
            icon={PackageOpen}
            title={"Delivery Time"}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Distinctio, saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Distinctio, saepe?"
            }
          ></MainCard>
        </div>
      </div>
    </section>
  );
};

export default Working;
