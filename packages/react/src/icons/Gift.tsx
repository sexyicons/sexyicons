import React from "react";
import { withSVG, IconProps } from "../helpers/withSVG";

export const Gift: React.FC<IconProps> = ({
  color = "currentColor",
  secondaryColor,
  set = "line",
}) => {
  const Line = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.05A3.5 3.5 0 1 0 7.05 8H6.5A3.5 3.5 0 0 0 5 14.663V17a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-2.337A3.5 3.5 0 0 0 17.5 8h-.55A3.5 3.5 0 1 0 12 3.05ZM9.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM11 10H6.5a1.5 1.5 0 0 0 0 3H11v-3Zm2 0h4.5a1.5 1.5 0 0 1 0 3H13v-3Zm-2 5H7v2a3 3 0 0 0 3 3h1v-5Zm2 5v-5h4v2a3 3 0 0 1-3 3h-1Z"
        fill={color}
      />
    </>
  );

  const Solid = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5 2c.98 0 1.865.402 2.5 1.05A3.5 3.5 0 1 1 16.95 8h.55a3.5 3.5 0 0 1 1.5 6.663V17a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-2.337A3.5 3.5 0 0 1 6.5 8h.55A3.5 3.5 0 0 1 9.5 2ZM8 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-8 3H11v3H6.5a1.5 1.5 0 0 1 0-3Zm6.5 3h4.5a1.5 1.5 0 0 0 0-3H13v3Z"
        fill={color}
      />
    </>
  );

  const Lineal = () => (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.05a3.5 3.5 0 1 0 0 4.899 3.5 3.5 0 1 0 0-4.899ZM8 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 11.5A3.5 3.5 0 0 1 6.5 8h11a3.5 3.5 0 0 1 1.5 6.663V17a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-2.337A3.5 3.5 0 0 1 3 11.5ZM13 15h4v2a3 3 0 0 1-3 3h-1v-5Zm0-2h4.5a1.5 1.5 0 0 0 0-3H13v3Zm-2-3v3H6.5a1.5 1.5 0 0 1 0-3H11Zm0 5v5h-1a3 3 0 0 1-3-3v-2h4Z"
        fill={color}
      />
    </>
  );

  const Bulk = () => (
    <>
      <path
        d="M6.5 8a3.5 3.5 0 0 0-1.45 6.687A1 1 0 0 0 5 15v2a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-2a1 1 0 0 0-.05-.313A3.5 3.5 0 0 0 17.5 8h-11Z"
        fill={secondaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.05a3.5 3.5 0 1 0-1 5.613V14.7H5v2h6V22h2v-5.3h6v-2h-6V8.663a3.5 3.5 0 1 0-1-5.613ZM9.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
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

export default withSVG(Gift);
