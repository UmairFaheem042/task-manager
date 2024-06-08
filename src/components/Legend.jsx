import React from "react";

const Legend = () => {
  return (
    <div className="legend">
      <div>
        <span>In Progress : </span>
        <div className="circle incompleted"></div>
      </div>
      <div>
        <span>Completed : </span>
        <div className="circle completed"></div>
      </div>
    </div>
  );
};

export default Legend;
