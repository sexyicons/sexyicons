import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Image: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path d="M18 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v5.238l1.517-1.82a3 3 0 0 1 4.8.256l1.438 2.155a1 1 0 0 0 1.362.294l.836-.523a3 3 0 0 1 3.942.68l1.997 2.521c.07-.255.108-.523.108-.801V8a3 3 0 0 0-3-3H7Zm11.677 13.488-2.35-2.965a1 1 0 0 0-1.314-.227l-.836.523a3 3 0 0 1-4.086-.88l-1.437-2.156a1 1 0 0 0-1.6-.085l-3.035 3.641A3 3 0 0 0 7 19h10a2.99 2.99 0 0 0 1.677-.512Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path d="M18 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#152C70" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v5.238l1.517-1.82a3 3 0 0 1 4.8.256l1.438 2.155a1 1 0 0 0 1.362.294l.836-.523a3 3 0 0 1 3.942.68l1.997 2.521c.07-.255.108-.523.108-.801V8a3 3 0 0 0-3-3H7Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.517 11.418a3 3 0 0 1 4.8.256l1.438 2.155a1 1 0 0 0 1.362.294l.836-.523a3 3 0 0 1 3.942.68l2.889 3.647a1 1 0 0 1-1.568 1.242l-2.889-3.646a1 1 0 0 0-1.314-.227l-.836.523a3 3 0 0 1-4.086-.88l-1.437-2.156a1 1 0 0 0-1.6-.085L3.767 16.64a1 1 0 1 1-1.536-1.28l3.285-3.942Z"
        fill={secondaryColor}
      />
      <path d="M18 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#4296FF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H7Z"
        fill={color}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        d="M7 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H7Z"
        fill="#4296FF"
      />
      <path
        d="m19.892 16.801-1.997-2.52a3 3 0 0 0-3.942-.68l-.836.522a1 1 0 0 1-1.362-.293l-1.437-2.156a3 3 0 0 0-4.801-.256L4 13.238V16a3 3 0 0 0 3 3h10a3 3 0 0 0 2.892-2.199ZM16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#152C70"
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

export default withSVG(Image);
