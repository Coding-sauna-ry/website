import * as React from "react";
import { FC } from "react";
import clsx from "clsx";

type HeadingProps = {
  color: "text-white" | "text-black";
  size?: "small" | "medium" | "large";
  className?: string;
};

const Paragraph: FC<HeadingProps> = ({
  color,
  children,
  className,
  size = "medium",
}) => {
  const colorClass = color;

  let sizeClass;
  if (size === "small") sizeClass = "text-md";
  if (size === "medium") sizeClass = "text-xl";
  if (size === "large") sizeClass = "text-3xl";

  console.log("Size = " + sizeClass);

  return <p className={clsx(colorClass, sizeClass, className)}>{children}</p>;
};

export default Paragraph;
