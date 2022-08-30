import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Calendar: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        d="M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 3a1 1 0 0 0-2 0v1.1A5.002 5.002 0 0 0 2 9v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5.002 5.002 0 0 0-4-4.9V3a1 1 0 1 0-2 0v1H8V3Zm12 7H4v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7ZM4.17 8A3.001 3.001 0 0 1 7 6h10c1.306 0 2.418.835 2.83 2H4.17Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        d="M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1.1c2.282.463 4 2.481 4 4.9v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V9a5.002 5.002 0 0 1 4-4.9V3a1 1 0 0 1 1-1Zm13 8H4v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Zm10 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM7 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 4a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H7Zm12.83 4A3.001 3.001 0 0 0 17 6H7a3.001 3.001 0 0 0-2.83 2h15.66ZM4 10h16v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7Z"
        fill={color}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        d="M3 8a1 1 0 0 0-1 1v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a1 1 0 0 0-1-1H3Z"
        fill={secondaryColor}
      />
      <path
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1.1c2.282.463 4 2.481 4 4.9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 5.002 5.002 0 0 1 4-4.9V3a1 1 0 0 1 1-1Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
        fill={color}
      />
    </>
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

export default withSVG(Calendar);
