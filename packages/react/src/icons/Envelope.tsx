import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Envelope: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V9Zm5-3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H7Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.22 8.375a1 1 0 0 1 1.405-.156l2.5 2.001a3 3 0 0 0 3.75 0l2.5-2a1 1 0 0 1 1.25 1.56l-2.502 2.002a5 5 0 0 1-6.246 0L6.375 9.78a1 1 0 0 1-.156-1.406Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 4a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H7Zm.625 4.22a1 1 0 1 0-1.25 1.56l2.502 2.002a5 5 0 0 0 6.246 0l2.502-2.001a1 1 0 1 0-1.25-1.562l-2.5 2.001a3 3 0 0 1-3.749 0l-2.501-2Z"
      fill={color}
    />
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V9Zm5-3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H7Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.22 8.375a1 1 0 0 1 1.405-.156l2.501 2.001a3 3 0 0 0 3.748 0l2.501-2a1 1 0 0 1 1.25 1.56l-2.502 2.002a5 5 0 0 1-6.246 0L6.375 9.78a1 1 0 0 1-.156-1.406Z"
        fill={secondaryColor}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 4a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H7Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.22 8.375a1 1 0 0 1 1.405-.156l2.501 2.001a3 3 0 0 0 3.748 0l2.501-2a1 1 0 0 1 1.25 1.56l-2.502 2.002a5 5 0 0 1-6.246 0L6.375 9.78a1 1 0 0 1-.156-1.406Z"
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

export default withSVG(Envelope);
