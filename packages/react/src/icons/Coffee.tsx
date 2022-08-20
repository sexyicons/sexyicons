import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Coffee: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.164 5.329A3.107 3.107 0 0 1 5.264 2h9.473a3.108 3.108 0 0 1 3.106 3H18a4 4 0 0 1 0 8h-.967a7.444 7.444 0 0 1-14.458-1.914L2.164 5.33ZM17.43 11H18a2 2 0 1 0 0-4h-.283l-.286 4ZM5.263 4c-.642 0-1.15.545-1.104 1.186l.411 5.758a5.444 5.444 0 0 0 10.86 0l.411-5.758A1.107 1.107 0 0 0 14.737 4H5.263Z"
        fill={color}
      />
      <path
        d="M2 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.164 5.329A3.107 3.107 0 0 1 5.264 2h9.473a3.108 3.108 0 0 1 3.106 3H18a4 4 0 0 1 0 8h-.967a7.444 7.444 0 0 1-14.458-1.914L2.164 5.33ZM17.43 11H18a2 2 0 1 0 0-4h-.283l-.286 4Z"
        fill={color}
      />
      <path
        d="M2 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.164 5.329A3.107 3.107 0 0 1 5.264 2h9.473a3.108 3.108 0 0 1 3.106 3H18a4 4 0 0 1 0 8h-.967a7.444 7.444 0 0 1-14.458-1.914L2.164 5.33ZM17.43 11H18a2 2 0 1 0 0-4h-.283l-.286 4ZM5.263 4c-.642 0-1.15.545-1.104 1.186l.411 5.758a5.444 5.444 0 0 0 10.86 0l.411-5.758A1.107 1.107 0 0 0 14.737 4H5.263Z"
        fill={color}
      />
      <path
        d="M2 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
        fill={secondaryColor}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM16.571 6a1 1 0 0 1 1-1H18a4 4 0 0 1 0 8h-1a1 1 0 1 1 0-2h1a2 2 0 1 0 0-4h-.429a1 1 0 0 1-1-1Z"
        fill={color}
      />
      <path
        d="M5.263 2a3.107 3.107 0 0 0-3.1 3.329l.412 5.757a7.444 7.444 0 0 0 14.85 0l.411-5.757A3.107 3.107 0 0 0 14.736 2H5.264Z"
        fill={secondaryColor}
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

export default withSVG(Coffee);
