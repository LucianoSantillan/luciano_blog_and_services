export type HeadingSize = "xsm" | "sm" | "m" | "l" | "xl" | "xxl";

export interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  size?: HeadingSize;
}