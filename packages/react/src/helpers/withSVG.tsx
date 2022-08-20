import React from "react";

export type Set = "lineal" | "line" | "solid" | "bulk";

export interface SVGProps {
  color?: string;
  size?: string | number;
  set?: Set;
  label?: string;
  style?: React.CSSProperties;
  filled?: boolean;
  secondaryColor?: string;
}

export interface IconProps {
  color?: string;
  set: Set;
  secondaryColor?: string;
}

export const withSVG = (Component: React.FC<any>) => {
  return React.forwardRef<SVGSVGElement, SVGProps>(
    (
      {
        color = "#152C70",
        secondaryColor = "#4296FF",
        size = 24,
        set = "line",
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
          <Component
            color={color}
            set={filled ? "bold" : set}
            secondaryColor={secondaryColor}
          />
        </svg>
      );
    }
  );
};
