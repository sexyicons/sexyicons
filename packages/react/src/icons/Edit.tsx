import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Edit: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.207 2.793a3.121 3.121 0 0 0-4.414 0l-9.108 9.108a3 3 0 0 0-.79 1.394l-.865 3.463a1 1 0 0 0 1.213 1.212l3.462-.865a2.999 2.999 0 0 0 1.394-.79l9.108-9.108a3.121 3.121 0 0 0 0-4.414Zm-3 1.414a1.121 1.121 0 0 1 1.586 1.586l-9.108 9.108a1 1 0 0 1-.465.263l-1.846.462.462-1.846a1 1 0 0 1 .263-.464l9.108-9.109Z"
        fill={color}
      />
      <path d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z" fill={color} />
    </>
  );

  const Solid = () => (
    <>
      <path
        d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-5a1 1 0 1 0-2 0v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h5a1 1 0 1 0 0-2H7Z"
        fill={color}
      />
      <path
        d="M15.793 3.793a3.121 3.121 0 1 1 4.414 4.414L13.1 15.316a2.999 2.999 0 0 1-1.394.789l-3.462.865a1 1 0 0 1-1.213-1.212l.866-3.463a3 3 0 0 1 .789-1.394l7.108-7.108Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.207 2.793a3.121 3.121 0 0 0-4.414 0l-9.108 9.108a3 3 0 0 0-.79 1.394l-.865 3.463a1 1 0 0 0 1.213 1.212l3.462-.865a2.999 2.999 0 0 0 1.394-.79l9.108-9.108a3.121 3.121 0 0 0 0-4.414Zm-3 1.414a1.121 1.121 0 0 1 1.586 1.586l-9.108 9.108a1 1 0 0 1-.465.263l-1.846.462.462-1.846a1 1 0 0 1 .263-.464l9.108-9.109Z"
        fill={color}
      />
      <path d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z" fill={secondaryColor} />
    </svg>
  );

  const Bulk = () => (
    <>
      <path
        d="M20.207 3.793a3.121 3.121 0 0 0-4.414 0L8.685 10.9a3 3 0 0 0-.79 1.394l-.865 3.462a1 1 0 0 0 1.213 1.213l3.462-.865a3 3 0 0 0 1.394-.79l7.108-7.108a3.121 3.121 0 0 0 0-4.414Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 7a5 5 0 0 1 5-5h5a1 1 0 1 1 0 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a1 1 0 1 1 2 0v5a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7Z"
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

export default withSVG(Edit);
