import { Star, UserCircle2 } from "lucide-react";

const TestimonialCard = ({ name, position, quote, avatar }) => {
  return (
    <div className="bg-card rounded-3xl shadow-lg px-6 py-8 text-start hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex justify-start gap-4 mb-6">
        <UserCircle2 size={32}></UserCircle2>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-xs text-foreground/60">{position}</span>
        </div>
      </div>
      <p className="text-sm text-foreground/70 ">{quote}</p>

      <div className="flex justify-start gap-2 mt-6">
        <Star size={18}></Star>
        <Star size={18}></Star>
        <Star size={18}></Star>
        <Star size={18}></Star>
      </div>
    </div>
  );
};

export default TestimonialCard;
