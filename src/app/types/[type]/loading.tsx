import React from "react";

const Loading = () => {
  const placeholder: number[] = Array<number>(8).fill(0);
  return (
    <div className="grid grid-cols-4 gap-5 p-5 overflow-y-auto">
      {placeholder.map((_, idx) => (
        <div key={idx} className="bg-gray-300 rounded h-96"></div>
      ))}
    </div>
  );
};

export default Loading;
