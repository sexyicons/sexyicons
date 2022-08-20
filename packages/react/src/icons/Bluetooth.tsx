import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Bluetooth: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.567 2.099a1 1 0 0 1 1.058.12l5 4a1 1 0 0 1 .082 1.488L13.414 12l4.293 4.293a1 1 0 0 1-.082 1.488l-5 4A1 1 0 0 1 11 21v-6.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L11 9.586V3a1 1 0 0 1 .567-.901ZM13 14.414l2.503 2.503L13 18.92v-4.505Zm0-4.828V5.08l2.503 2.002L13 9.586Z"
      fill={color}
    />
  );

  const Solid = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.567 2.099a1 1 0 0 1 1.058.12l5 4a1 1 0 0 1 .082 1.488L13.414 12l4.293 4.293a1 1 0 0 1-.082 1.488l-5 4A1 1 0 0 1 11 21v-6.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L11 9.586V3a1 1 0 0 1 .567-.901ZM13 14.414l2.503 2.503L13 18.92v-4.505Zm0-4.828V5.08l2.503 2.002L13 9.586Z"
      fill={color}
    />
  );

  const Lineal = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.567 2.099a1 1 0 0 1 1.058.12l5 4a1 1 0 0 1 .082 1.488L13.414 12l4.293 4.293a1 1 0 0 1-.082 1.488l-5 4A1 1 0 0 1 11 21v-6.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L11 9.586V3a1 1 0 0 1 .567-.901ZM13 14.414l2.503 2.503L13 18.92v-4.505Zm0-4.828V5.08l2.503 2.002L13 9.586Z"
      fill={color}
    />
  );

  const Bulk = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.567 2.099a1 1 0 0 1 1.058.12l5 4a1 1 0 0 1 .082 1.488L13.414 12l4.293 4.293a1 1 0 0 1-.082 1.488l-5 4A1 1 0 0 1 11 21v-6.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L11 9.586V3a1 1 0 0 1 .567-.901ZM13 14.414l2.503 2.503L13 18.92v-4.505Zm0-4.828V5.08l2.503 2.002L13 9.586Z"
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

export default withSVG(Bluetooth);
