import React, { FC } from "react";

const Loading: FC = () => {
    const placeholder = [...Array<undefined>(8)];
    return (
        <div className="grid grid-cols-4 gap-5 p-5 overflow-y-auto">
            {placeholder.map((_, idx) => (
                <div key={idx} className="bg-gray-300 rounded h-96"></div>
            ))}
        </div>
    );
};

export default Loading;