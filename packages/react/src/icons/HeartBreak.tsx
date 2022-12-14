import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const HeartBreak: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.606 3A5.606 5.606 0 0 0 2 8.606v1.05c0 1.766.701 3.46 1.95 4.708l5.929 5.929a3 3 0 0 0 4.242 0l5.93-5.929A6.657 6.657 0 0 0 22 9.657V8.606a5.606 5.606 0 0 0-8.715-4.665L12 4.798l-1.285-.857A5.606 5.606 0 0 0 7.605 3ZM4 8.606a3.606 3.606 0 0 1 5.606-3l1.105.736-1.605 3.21A1 1 0 0 0 9.4 10.8l3.423 2.567-1.76 5.282-5.699-5.7A4.657 4.657 0 0 1 4 9.658V8.606Zm9.288 9.691 5.348-5.347A4.656 4.656 0 0 0 20 9.657V8.606a3.606 3.606 0 0 0-5.606-3l-1.618 1.079L11.268 9.7l3.332 2.5a1 1 0 0 1 .349 1.116l-1.66 4.981Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8.606a5.606 5.606 0 0 1 8.715-4.665L12 4.798l1.285-.857A5.606 5.606 0 0 1 22 8.606v1.05a6.657 6.657 0 0 1-1.95 4.708l-5.929 5.929a3 3 0 0 1-4.242 0l-5.93-5.929A6.657 6.657 0 0 1 2 9.657V8.606Zm10.894-.159a1 1 0 1 0-1.788-.894l-2 4a1 1 0 0 0 .651 1.417l2.89.722-1.575 3.937a1 1 0 0 0 1.857.742l2-5a1 1 0 0 0-.687-1.341l-2.79-.698 1.442-2.885Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.447 5.106a1 1 0 0 1 .448 1.341l-1.627 3.254L14.6 12.2a1 1 0 0 1 .349 1.116l-2 6a1 1 0 0 1-1.898-.632l1.772-5.317L9.4 10.8a1 1 0 0 1-.294-1.247l2-4a1 1 0 0 1 1.341-.447Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8.606a5.606 5.606 0 0 1 8.715-4.665L12 4.798l1.285-.857A5.606 5.606 0 0 1 22 8.606v1.05a6.657 6.657 0 0 1-1.95 4.708l-5.929 5.929a3 3 0 0 1-4.242 0l-5.93-5.929A6.657 6.657 0 0 1 2 9.657V8.606ZM7.606 5A3.606 3.606 0 0 0 4 8.606v1.05c0 1.236.49 2.42 1.364 3.294l5.929 5.929a1 1 0 0 0 1.414 0l5.929-5.93A4.656 4.656 0 0 0 20 9.658V8.606a3.606 3.606 0 0 0-5.606-3l-1.84 1.226a1 1 0 0 1-1.109 0l-1.84-1.226a3.606 3.606 0 0 0-2-.606Z"
        fill={color}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        d="M7.606 3A5.606 5.606 0 0 0 2 8.606v1.05c0 1.766.701 3.46 1.95 4.708l5.929 5.929a3 3 0 0 0 4.242 0l5.93-5.929A6.657 6.657 0 0 0 22 9.657V8.95a5.95 5.95 0 0 0-10.127-4.237l-1.158-.772A5.606 5.606 0 0 0 7.605 3Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.555 6.168a1 1 0 0 1 .277 1.387l-1.475 2.213L14.6 12.2a1 1 0 0 1 .329 1.171l-2 5a1 1 0 1 1-1.857-.742l1.715-4.289L9.4 10.8a1 1 0 0 1-.232-1.355l2-3a1 1 0 0 1 1.387-.277Z"
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

export default withSVG(HeartBreak);
