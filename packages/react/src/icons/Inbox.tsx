import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Inbox: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.472 2A5 5 0 0 0 5 4.764L2.317 10.13A3 3 0 0 0 2 11.473V17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-5.528a3 3 0 0 0-.317-1.341L19 4.763A5 5 0 0 0 14.528 2H9.472Zm10.41 9-2.67-5.342A3 3 0 0 0 14.527 4H9.472A3 3 0 0 0 6.79 5.658L4.118 11H5.5A3.5 3.5 0 0 1 9 14.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5 3.5 3.5 0 0 1 3.5-3.5h1.382ZM4 13h1.5A1.5 1.5 0 0 1 7 14.5a3.5 3.5 0 0 0 3.5 3.5h3a3.5 3.5 0 0 0 3.5-3.5 1.5 1.5 0 0 1 1.5-1.5H20v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 4.764A5 5 0 0 1 9.472 2h5.056A5 5 0 0 1 19 4.764l2.683 5.366a3 3 0 0 1 .28.87H22v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6h.037a3 3 0 0 1 .28-.87L5 4.764ZM19.882 11H18.5a3.5 3.5 0 0 0-3.5 3.5 1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5 3.5 3.5 0 0 0 5.5 11H4.118l2.67-5.342A3 3 0 0 1 9.473 4h5.056a3 3 0 0 1 2.683 1.658L19.882 11Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 4.764A5 5 0 0 1 9.472 2h5.056A5 5 0 0 1 19 4.764l2.683 5.366A3 3 0 0 1 22 11.473V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-5.528a3 3 0 0 1 .317-1.341L5 4.763ZM9.472 4A3 3 0 0 0 6.79 5.658l-2.683 5.367a1 1 0 0 0-.106.447V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5.528a1 1 0 0 0-.106-.447l-2.683-5.367A3 3 0 0 0 14.528 4H9.472Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 11h3.5A3.5 3.5 0 0 1 9 14.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5 3.5 3.5 0 0 1 3.5-3.5H22v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6Zm2 2v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4h-1.5a1.5 1.5 0 0 0-1.5 1.5 3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 14.5 1.5 1.5 0 0 0 5.5 13H4Z"
        fill={color}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        d="M9.472 2A5 5 0 0 0 5 4.764L2.317 10.13A3 3 0 0 0 2 11.473V17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-5.528a3 3 0 0 0-.317-1.341L19 4.763A5 5 0 0 0 14.528 2H9.472Z"
        fill={secondaryColor}
      />
      <path
        d="M5.5 11H2v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-6h-3.5a3.5 3.5 0 0 0-3.5 3.5 1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5 3.5 3.5 0 0 0 5.5 11Z"
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

export default withSVG(Inbox);
