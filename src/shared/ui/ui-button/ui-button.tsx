import { ComponentProps, ElementType, ReactNode } from "react";
import clsx from "clsx";

import s from "./ui-button.module.css";

type TButtonOwnProps<E extends ElementType = ElementType> = {
  color?: "primary" | "positive" | "negative";
  children: ReactNode;
  className?: string;
  as?: E;
};

type TButtonProps<E extends ElementType> = TButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof TButtonOwnProps>;

const defaultElement = "button";

export const UiButton = <E extends ElementType = typeof defaultElement>({
  color = "primary",
  children,
  as,
  className,
  ...otherProps
}: TButtonProps<E>) => {
  const TagName = as || defaultElement;
  const classes = clsx(className, s.root, s[color]);

  return (
    <TagName {...otherProps} className={classes}>
      {children}
    </TagName>
  );
};
