import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Camera: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 13a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 3a2 2 0 0 0-2 2H7a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5h-1a2 2 0 0 0-2-2h-4ZM7 7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H7Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path d="M10 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h1a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5h1Zm4 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 3a2 2 0 0 0-2 2H7a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5h-1a2 2 0 0 0-2-2h-4ZM7 7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H7Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 13a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill={secondaryColor}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Z"
        fill={color}
      />
      <path
        d="M7 5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5H7Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
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

export default withSVG(Camera);
