import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
};

export const UiLink = ({ children, ...props }: Props) => {
  return <Link {...props}>{children}</Link>;
};
