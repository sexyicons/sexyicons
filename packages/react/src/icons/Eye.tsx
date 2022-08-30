import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Eye: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 8a4 4 0 1 0 0 7.999A4 4 0 0 0 12 8Zm-2 4a2 2 0 1 1 3.999-.002 2 2 0 0 1-3.999.003Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.239 5.001A9.479 9.479 0 0 0 3.872 8.603L2.655 10.63a2.66 2.66 0 0 0 0 2.738l1.217 2.028a9.479 9.479 0 0 0 16.256 0l1.217-2.028a2.66 2.66 0 0 0 0-2.738l-1.217-2.028A9.479 9.479 0 0 0 16.238 5Zm-7.584 1.79a7.478 7.478 0 0 1 9.758 2.84l1.217 2.03a.66.66 0 0 1 0 .679l-1.217 2.028a7.477 7.477 0 0 1-12.826 0L4.37 12.34a.66.66 0 0 1 0-.68l1.217-2.028A7.479 7.479 0 0 1 8.655 6.79Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path d="M12 10a2 2 0 1 0 0 3.999A2 2 0 0 0 12 10Z" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.761 5.001a9.478 9.478 0 0 1 12.367 3.602l1.217 2.028a2.66 2.66 0 0 1 0 2.738l-1.217 2.028a9.479 9.479 0 0 1-16.256 0L2.655 13.37a2.66 2.66 0 0 1 0-2.738l1.217-2.028A9.478 9.478 0 0 1 7.761 5Zm.239 7a4 4 0 1 1 7.999-.003A4 4 0 0 1 8 12.001Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.239 5.001A9.479 9.479 0 0 0 3.872 8.603L2.655 10.63a2.66 2.66 0 0 0 0 2.738l1.217 2.028a9.479 9.479 0 0 0 16.256 0l1.217-2.028a2.66 2.66 0 0 0 0-2.738l-1.217-2.028A9.479 9.479 0 0 0 16.238 5Zm-7.584 1.79a7.478 7.478 0 0 1 9.758 2.84l1.217 2.03a.66.66 0 0 1 0 .679l-1.217 2.028a7.477 7.477 0 0 1-12.826 0L4.37 12.34a.66.66 0 0 1 0-.68l1.217-2.028A7.479 7.479 0 0 1 8.655 6.79Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 8a4 4 0 1 0 0 7.999A4 4 0 0 0 12 8Zm-2 4a2 2 0 1 1 3.999-.002 2 2 0 0 1-3.999.003Z"
        fill={secondaryColor}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        d="M16.243 5A9.478 9.478 0 0 0 3.876 8.603L2.66 10.63a2.66 2.66 0 0 0 0 2.738l1.217 2.029a9.479 9.479 0 0 0 16.256 0l1.217-2.029a2.66 2.66 0 0 0 0-2.738l-1.217-2.028A9.479 9.479 0 0 0 16.243 5Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.004 10a2 2 0 1 0 0 3.998 2 2 0 0 0 0-3.999Zm-4 2a4 4 0 1 1 8-.002 4 4 0 0 1-8 .002Z"
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

export default withSVG(Eye);
