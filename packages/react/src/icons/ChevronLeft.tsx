import React from "react";
import { withSVG, Set } from "../helpers/withSVG";

export interface IconProps {
  color?: string;
  set: Set;
}

export const ChevronLeft: React.FC<IconProps> = ({
  color = "currentColor",
  set = "line",
}) => {
  const Line = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.65 4.24a1 1 0 0 1 .11 1.41L10.316 12l5.442 6.35a1 1 0 0 1-1.518 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 0 1 1.41-.11Z"
      fill={color}
    />
  );

  const Solid = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6508 4.24075C16.0701 4.60017 16.1187 5.23147 15.7593 5.65079L10.3171 12L15.7593 18.3492C16.1187 18.7685 16.0701 19.3998 15.6508 19.7593C15.2315 20.1187 14.6002 20.0701 14.2407 19.6508L8.24074 12.6508C7.91975 12.2763 7.91975 11.7237 8.24074 11.3492L14.2407 4.34921C14.6002 3.92989 15.2315 3.88132 15.6508 4.24075Z"
      fill={color}
    />
  );

  const Lineal = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6508 4.24075C16.0701 4.60017 16.1187 5.23147 15.7593 5.65079L10.3171 12L15.7593 18.3492C16.1187 18.7685 16.0701 19.3998 15.6508 19.7593C15.2315 20.1187 14.6002 20.0701 14.2407 19.6508L8.24074 12.6508C7.91975 12.2763 7.91975 11.7237 8.24074 11.3492L14.2407 4.34921C14.6002 3.92989 15.2315 3.88132 15.6508 4.24075Z"
      fill={color}
    />
  );

  const Bulk = () => (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z"
      fill={color}
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

export default withSVG(ChevronLeft);
