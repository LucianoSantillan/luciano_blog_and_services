import './Heading1.css';
import { HeadingProps } from '../shared/HeadingProps';
import '../shared/HeadingSizes.css';

export default function Heading1({ children, className = "", size = "xl", ...rest }: HeadingProps) {
  return (
    <h1 className={`heading1 heading-${size} ${className}`} {...rest}>
      {children}
    </h1>
  );
}
