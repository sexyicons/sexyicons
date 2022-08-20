import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Clock: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 6a1 1 0 0 1 1 1v4.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-5a1 1 0 1 0-2 0v5a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414-1.414L13 11.586V7Z"
      fill={color}
    />
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 6a1 1 0 0 1 1 1v4.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1Z"
        fill={secondaryColor}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 6a1 1 0 0 1 1 1v4.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1Z"
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

export default withSVG(Clock);
