import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Cart: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 3a1 1 0 0 0 0 2h1a1 1 0 0 1 .989.848l.278 4.464A5 5 0 0 0 11.257 15H16a5 5 0 0 0 0-10H7.83A3.001 3.001 0 0 0 5 3H4Zm4.264 7.187L8.064 7H16a3 3 0 0 1 0 6h-4.742a3 3 0 0 1-2.994-2.813Z"
        fill={color}
      />
      <path
        d="M12 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 3a1 1 0 0 0 0 2h1a1 1 0 0 1 .989.848l.278 4.464A5 5 0 0 0 11.257 15H16a5 5 0 0 0 0-10H7.83A3.001 3.001 0 0 0 5 3H4Z"
        fill={color}
      />
      <path
        d="M12 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 3a1 1 0 0 0 0 2h1a1 1 0 0 1 .989.848l.278 4.464A5 5 0 0 0 11.257 15H16a5 5 0 0 0 0-10H7.83A3.001 3.001 0 0 0 5 3H4Zm4.264 7.187L8.064 7H16a3 3 0 0 1 0 6h-4.742a3 3 0 0 1-2.994-2.813Z"
        fill={color}
      />
      <path
        d="M12 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill={secondaryColor}
      />
    </>
  );

  const Bulk = () => (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 3a1 1 0 0 0 0 2h1a1 1 0 0 1 .989.848l.278 4.464A5 5 0 0 0 11.257 15H16a5 5 0 0 0 0-10H7.83A3.001 3.001 0 0 0 5 3H4Z"
        fill={secondaryColor}
      />
      <path
        d="M12 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill={color}
      />
    </svg>
  );
  switch (set) {
    case "solid":
      return <Solid />;
    case "lineal":
      return <Lineal />;
    case "bulk":
      return <Bulk />;
    default:
      return <Line />;
  }
};

export default withSVG(Cart);
