import { ArrowRight, Group, List, Truck } from "lucide-react";
import CircularLayer from "../elements/CircularLayer";
import MiniCard from "../elements/MiniCard";

const Hero = () => {
  return (
    <div className="relative bg-background h-screen space-y-12 py-12 overflow-hidden">
      {/* bg-layer */}
      <CircularLayer pos1={"-top-[40%]"} pos2={"-left-[10%]"}></CircularLayer>
      <CircularLayer pos1={"-top-[30%]"} pos2={"-right-[10%]"}></CircularLayer>
      <CircularLayer
        pos1={"-bottom-[40%]"}
        pos2={"right-[10%]"}
      ></CircularLayer>

      <div className="container max-w-7xl px-4 py-6 z-10 mt-12">
        <div className="flex justify-center items-center gap-2">
          <div className="flex md:flex-1/2 flex-col gap-8">
            <h1 className="md:text-6xl font-semibold">
              Providing <br />{" "}
              <span className="text-primary">Freshh Produce </span>
              <br />
              Every Day
            </h1>
            <p className="md:w-3/4 text-sm text-foreground/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eligendi unde illum at deserunt fugit temporibus quos asperiores
              est neque!
            </p>

            <button className="flex justify-center items-center gap-3 solid-button w-fit py-4">
              Learn More <ArrowRight></ArrowRight>
            </button>

            <div className="num-data-cards flex justify-start items-end gap-4 opacity-85 mt-8">
              <MiniCard
                color={"orange"}
                icon={<Truck size={18}></Truck>}
                title={"1400+"}
                label={"Dilevery"}
              ></MiniCard>

              <MiniCard
                color={"primary"}
                icon={<Group size={18}></Group>}
                title={"1200+"}
                label={"Customer"}
              ></MiniCard>

              <MiniCard
                color={"orange"}
                icon={<List size={18}></List>}
                title={"40+"}
                label={"Products"}
              ></MiniCard>
            </div>
          </div>
          <div className="md:flex-1/2">
            <img
              className="object-cover w-[80%]"
              src="/img/cycling.svg"
              alt="cycling"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
