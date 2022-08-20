import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Glass: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 2a1 1 0 0 0-1 1 8.24 8.24 0 0 0 2.414 5.828L11 13.414V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-6.586l4.586-4.586A8.243 8.243 0 0 0 20 3a1 1 0 0 0-1-1H5Zm2.828 5.414A6.243 6.243 0 0 1 6.081 4h11.838a6.243 6.243 0 0 1-1.747 3.414L12 11.586 7.828 7.414Z"
      fill={color}
    />
  );

  const Solid = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 2a1 1 0 0 0-1 1 8.24 8.24 0 0 0 2.414 5.828L11 13.414V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-6.586l4.586-4.586A8.243 8.243 0 0 0 20 3a1 1 0 0 0-1-1H5Z"
      fill={color}
    />
  );

  const Lineal = () => (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 13a1 1 0 1 0-2 0v7H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-7Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 2a1 1 0 0 0-1 1 8.24 8.24 0 0 0 2.414 5.828l4.879 4.88a1 1 0 0 0 1.414 0l4.879-4.88A8.243 8.243 0 0 0 20 3a1 1 0 0 0-1-1H5Zm2.828 5.414A6.243 6.243 0 0 1 6.081 4h11.838a6.243 6.243 0 0 1-1.747 3.414L12 11.586 7.828 7.414Z"
        fill={secondaryColor}
      />
    </svg>
  );

  const Bulk = () => (
    <>
      <path
        d="M13 13a1 1 0 1 0-2 0v7H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-7Z"
        fill={color}
      />
      <path
        d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1 8.243 8.243 0 0 1-2.414 5.828l-4.879 4.88a1 1 0 0 1-1.414 0l-4.879-4.88A8.243 8.243 0 0 1 4 3Z"
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

export default withSVG(Glass);
