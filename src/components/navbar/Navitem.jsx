import React, { useRef } from "react";

const Navitem = ({ name, icon }) => {

  

  return (
    <div className="cursor-pointer">
      <div className="hover:scale-150 transition duration-200">{name}</div>
    </div>
  );
};

export default Navitem;
