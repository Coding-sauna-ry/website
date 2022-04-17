import * as React from "react";
import { FC } from "react";
import clsx from "clsx";

type HeadingProps = {
  size: 1 | 2 | 3;
  color: "primary" | "secondary";
};

const Heading: FC<HeadingProps> = (props) => {
  let sizeClasses;
  switch (props.size) {
    case 1:
      sizeClasses = "text-3xl";
    case 2:
      sizeClasses = "text-2xl";
    case 2:
      sizeClasses = "text-xl";
  }

  let colorClasses;
  switch (props.color) {
    case "primary":
      colorClasses = "text-black";
      break;
    case "secondary":
      colorClasses = "text-white";
      break;
  }

  return <h1 className={clsx(sizeClasses, colorClasses)}>{props.children}</h1>;
};

export default Heading;
