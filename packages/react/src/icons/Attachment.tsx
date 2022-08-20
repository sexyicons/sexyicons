import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Attachment: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 15a5 5 0 0 0 10 0V6a1 1 0 1 1 2 0v9a7 7 0 0 1-14 0V7a5 5 0 0 1 10 0v8.172a3 3 0 0 1-6 0V7a1 1 0 1 1 2 0v8.172a1 1 0 0 0 2 0V7a3 3 0 1 0-6 0v8Z"
      fill={color}
    />
  );

  const Solid = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 15a5 5 0 0 0 10 0V6a1 1 0 1 1 2 0v9a7 7 0 0 1-14 0V7a5 5 0 0 1 10 0v8.172a3 3 0 0 1-6 0V7a1 1 0 1 1 2 0v8.172a1 1 0 0 0 2 0V7a3 3 0 1 0-6 0v8Z"
      fill={color}
    />
  );

  const Lineal = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 15a5 5 0 0 0 10 0V6a1 1 0 1 1 2 0v9a7 7 0 0 1-14 0V7a5 5 0 0 1 10 0v8.172a3 3 0 0 1-6 0V7a1 1 0 1 1 2 0v8.172a1 1 0 0 0 2 0V7a3 3 0 1 0-6 0v8Z"
      fill={color}
    />
  );

  const Bulk = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 15a5 5 0 0 0 10 0V6a1 1 0 1 1 2 0v9a7 7 0 0 1-14 0V7a5 5 0 0 1 10 0v8.172a3 3 0 0 1-6 0V7a1 1 0 1 1 2 0v8.172a1 1 0 0 0 2 0V7a3 3 0 1 0-6 0v8Z"
      fill={secondaryColor}
    />
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

export default withSVG(Attachment);
