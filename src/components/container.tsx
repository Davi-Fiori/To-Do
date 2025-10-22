import { cva, type VariantProps } from "class-variance-authority";
import React from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const containerVariants = cva("mx-auto", {
    variants: {
        size: {
            md: "max-w-[31.5rem]"
        }
    },
    defaultVariants: {
        size: "md"
    }
});

interface CointainerProps extends VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
        as?: keyof React.JSX.IntrinsicElements;
    }

export default function Container({
    as = "div",
    children,
    className,
    ...props
}: CointainerProps) {
    return React.createElement(
      as,
      {
        className: containerVariants({size: "md", className}),
        ...props
      } ,
      children
    );
}