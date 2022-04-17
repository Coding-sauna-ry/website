import clsx from "clsx";
import React, { MouseEventHandler } from "react";
import { FC } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler;
  color: "primary" | "secondary";
  className?: string;
};

const Button: FC<ButtonProps> = ({ onClick, color, children, className }) => {
  const background = color === "primary" ? "bg-[#ffd500]" : "bg-[#2c5825]";
  const textColor = color === "primary" ? "text-[#2c5825]" : "text-[#ffd500]";

  const btnStyles = "rounded-lg text-5xl my-5 p-2 block";

  return (
    <button
      onClick={onClick}
      className={clsx(background, textColor, btnStyles, className)}
    >
      {children}
    </button>
  );
};

export default Button;
