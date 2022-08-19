import React from "react";

export type Set = "lineal" | "lines" | "solid" | "bulk";

export interface SVGProps {
  color?: string;
  size?: string | number;
  set?: Set;
  label?: string;
  style?: React.CSSProperties;
  filled?: boolean;
}

export const withSVG = (Component: React.FC<any>) => {
  return React.forwardRef<SVGSVGElement, SVGProps>(
    (
      {
        color = "currentColor",
        size = 24,
        set = "lines",
        style,
        label,
        filled = false,
        ...props
      },
      forwardRef
    ) => {
      return (
        <svg
          width={size}
          height={size}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={forwardRef}
          viewBox="0 0 24 24"
          style={style}
          aria-label={label || undefined}
          role={label ? "img" : "presentation"}
          {...props}
        >
          <Component color={color} set={filled ? "bold" : set} />
        </svg>
      );
    }
  );
};
