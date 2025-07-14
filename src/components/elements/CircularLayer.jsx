import React from "react";

const CircularLayer = ({pos1, pos2}) => {
  return (
    <div
      className={`z-0 absolute flex justify-center items-center border-2 border-black/10 w-[500px] h-[500px] rounded-full ${pos1} ${pos2}`}
    >
      <div className="flex justify-center items-center border-2 border-black/10 w-[300px] h-[300px] rounded-full"></div>
    </div>
  );
};

export default CircularLayer;
