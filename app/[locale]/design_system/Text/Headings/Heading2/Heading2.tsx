import './Heading2.css';
import { HeadingProps } from '../shared/HeadingProps';
import '../shared/HeadingSizes.css';

export default function Heading2({ children, className = "", size = "l", ...rest }: HeadingProps) {
  return (
    <h2 className={`heading2 heading-${size} ${className}`} {...rest}>
      {children}
    </h2>
  );
}
