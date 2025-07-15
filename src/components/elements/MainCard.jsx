import React from "react";

const MainCard = ({ title, desc, icon: Icon }) => {
  return (
    <div className="gap-4 flex flex-col text-center items-center py-6 px-6 bg-card hover:shadow-2xl rounded-2xl transition-all duration-300 hover:z-50">
      {Icon && <Icon className="text-primary" size={80} />}
      <h4 className="text-lg font-semibold capitalize">{title}</h4>
      <p className="text-sm text-foreground/70">{desc}</p>
    </div>
  );
};

export default MainCard;