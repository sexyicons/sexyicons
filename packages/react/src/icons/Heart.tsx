import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Heart: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8.606a5.606 5.606 0 0 1 8.715-4.665L12 4.798l1.285-.857A5.606 5.606 0 0 1 22 8.606v.738a7.413 7.413 0 0 1-2.171 5.241l-5.708 5.708a3 3 0 0 1-4.242 0L4.17 14.585A7.412 7.412 0 0 1 2 9.344v-.738ZM7.606 5A3.606 3.606 0 0 0 4 8.606v.738c0 1.435.57 2.812 1.585 3.827l5.708 5.708a1 1 0 0 0 1.414 0l5.708-5.708A5.413 5.413 0 0 0 20 9.344v-.738a3.606 3.606 0 0 0-5.606-3l-1.84 1.226a1 1 0 0 1-1.109 0l-1.84-1.226a3.606 3.606 0 0 0-2-.606Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8.606a5.606 5.606 0 0 1 8.715-4.665L12 4.798l1.285-.857A5.606 5.606 0 0 1 22 8.606v.738a7.413 7.413 0 0 1-2.171 5.241l-5.708 5.708a3 3 0 0 1-4.242 0L4.17 14.585A7.412 7.412 0 0 1 2 9.344v-.738Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8.606a5.606 5.606 0 0 1 8.715-4.665L12 4.798l1.285-.857A5.606 5.606 0 0 1 22 8.606v.738a7.413 7.413 0 0 1-2.171 5.241l-5.708 5.708a3 3 0 0 1-4.242 0L4.17 14.585A7.412 7.412 0 0 1 2 9.344v-.738ZM7.606 5A3.606 3.606 0 0 0 4 8.606v.738c0 1.435.57 2.812 1.585 3.827l5.708 5.708a1 1 0 0 0 1.414 0l5.708-5.708A5.413 5.413 0 0 0 20 9.344v-.738a3.606 3.606 0 0 0-5.606-3l-1.84 1.226a1 1 0 0 1-1.109 0l-1.84-1.226a3.606 3.606 0 0 0-2-.606Z"
        fill={color}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8.606a5.606 5.606 0 0 1 8.715-4.665L12 4.798l1.285-.857A5.606 5.606 0 0 1 22 8.606v.738a7.413 7.413 0 0 1-2.171 5.241l-5.708 5.708a3 3 0 0 1-4.242 0L4.17 14.585A7.412 7.412 0 0 1 2 9.344v-.738Z"
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

export default withSVG(Heart);
