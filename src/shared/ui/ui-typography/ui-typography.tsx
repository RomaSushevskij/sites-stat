import { ComponentProps, ElementType, ReactNode } from "react";
import clsx from "clsx";

import s from "./ui-typography.module.css";

export type TTypographyVariants = "h1" | "h2" | "h3" | "body1" | "body2" | "body3" | "body4";

export type TTypographyOwnProps<E extends ElementType = ElementType> = {
  variant?: TTypographyVariants;
  children?: ReactNode;
  className?: string;
  as?: E;
};

export type TTypographyProps<E extends ElementType> = TTypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TTypographyOwnProps>;

const defaultElement = "p";

export function UiTypography<E extends ElementType = typeof defaultElement>({
  variant = "body1",
  children,
  className,
  as,
  ...otherProps
}: TTypographyProps<E>) {
  const classes = clsx(className, s.root, s[variant]);
  const TagName = as || defaultElement;

  return (
    <TagName className={classes} {...otherProps}>
      {children}
    </TagName>
  );
}
