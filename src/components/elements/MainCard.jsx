import React from "react";

const MainCard = ({title, desc, icon}) => {
  return (
    <div className="gap-4 flex flex-col text-center items-center py-6 px-6 bg-card hover:shadow-2xl rounded-2xl transition-all duration-300 hover:z-50">
      <GemIcon className="text-primary" size={80}></GemIcon>
      <h4 className="text-lg font-semibold capitalize">Become a Member</h4>
      <p className="text-sm text-foreground/70">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
        saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Distinctio, saepe?
      </p>
    </div>
  );
};

export default MainCard;
