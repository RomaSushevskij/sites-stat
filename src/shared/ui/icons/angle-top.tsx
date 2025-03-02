import { FC, SVGProps } from "react";

export const AngleTopIcon: FC<SVGProps<SVGSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      fill="#222222"
      width="50rem"
      height="50rem"
      viewBox="-8.5 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>angle-top</title>
      <path d="M0.84 20.040c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.88-0.32 1.2 0l6.44 6.44c0.32 0.32 0.32 0.84 0 1.2-0.32 0.32-0.84 0.32-1.2 0l-5.84-5.84-5.84 5.84c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>
    </svg>
  );
};
