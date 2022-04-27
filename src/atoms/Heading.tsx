import React from "react";
import clsx from "clsx";

interface Props {
  color: string; 
}

const Heading: React.FC<Props> = ({ color, children }) => {
  return (
    <h1
      className={clsx(
        "text-3xl font-bold leading-tight",
        color === "primary" ? "text-primary" : `text-[${color}]`
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
