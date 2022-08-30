import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Aid: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        d="M12 10a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.1 6a5.002 5.002 0 0 1 9.8 0h.1a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5h.1Zm2.07 0a3.001 3.001 0 0 1 5.66 0H9.17ZM4 11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.1 6a5.002 5.002 0 0 1 9.8 0h.1a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5h.1Zm2.07 0a3.001 3.001 0 0 1 5.66 0H9.17ZM12 10a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.1 6a5.002 5.002 0 0 1 9.8 0h.1a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5h.1Zm2.07 0a3.001 3.001 0 0 1 5.66 0H9.17ZM4 11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6Z"
        fill={color}
      />
      <path
        d="M12 10a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
        fill={secondaryColor}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 7a5 5 0 0 1 10 0v3H7V7Zm5-3a3 3 0 0 0-3 3v1h6V7a3 3 0 0 0-3-3Z"
        fill={color}
      />
      <path
        d="M14.83 6H7a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5h-2.17Z"
        fill={secondaryColor}
      />
      <path
        d="M13 11a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
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

export default withSVG(Aid);
