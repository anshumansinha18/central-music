import React from "react";

export default function ProductsContainer({ children, type, bg }) {
  return (
    <div
      className="mt-[50px] flex flex-col items-center justify-center gap-2"
      style={{ background: `${bg}` }}
    >
      <div className="bar h-1 w-11 bg-orange-700 mt-9"></div>
      <div className="text-xl">{type}</div>
      {children}
    </div>
  );
}
