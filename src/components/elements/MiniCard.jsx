import React from "react";

const MiniCard = ({ icon, color, label, title }) => {
  return (
    <div
      className={`opacity-80 flex flex-col justify-center items-center gap-2 bg-cards shadow-md rounded-md border-2 border-dotted border-${color} px-3 py-2 text-${color}`}
    >
      <p className="text-md font-semibold">{title}</p>
      <span className="flex gap-2 text-sm text-center">
        {icon} {label}
      </span>
    </div>
  );
};

export default MiniCard;
