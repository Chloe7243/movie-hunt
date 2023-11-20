import React from "react";


const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <span
      className={
        "bg-white text-black md:px-4 px-2 py-2 rounded-lg md:text-lg text-sm flex items-center justify-center min-w-fit max-h-[2.8rem] " +
        className
      }
    >
      {children}
    </span>
  );
};

export default Card;
