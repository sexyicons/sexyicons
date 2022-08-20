import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Bookmark: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1.496.868l-5.016-2.866a3 3 0 0 0-2.976 0l-5.016 2.866A1 1 0 0 1 4 21V3Zm2 1v15.277l3.52-2.011a5 5 0 0 1 4.96 0l3.52 2.01V4H6Z"
      fill={color}
    />
  );

  const Solid = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1.496.868l-5.016-2.866a3 3 0 0 0-2.976 0l-5.016 2.866A1 1 0 0 1 4 21V3Z"
      fill={color}
    />
  );

  const Lineal = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1.496.868l-5.016-2.866a3 3 0 0 0-2.976 0l-5.016 2.866A1 1 0 0 1 4 21V3Zm2 1v15.277l3.52-2.011a5 5 0 0 1 4.96 0l3.52 2.01V4H6Z"
      fill={color}
    />
  );

  const Bulk = () => (
    <path
      d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1.496.868l5.016-2.866a3 3 0 0 1 2.976 0l5.016 2.866A1 1 0 0 0 20 21V3a1 1 0 0 0-1-1H5Z"
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

export default withSVG(Bookmark);
