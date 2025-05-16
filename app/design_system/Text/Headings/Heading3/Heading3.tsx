import './Heading3.css';
import { HeadingProps } from '../shared/HeadingProps';
import '../shared/HeadingSizes.css';

export default function Heading3({ children, className = "", size = "l", ...rest }: HeadingProps) {
  return (
    <h3 className={`heading3 heading-${size} ${className}`} {...rest}>
      {children}
    </h3>
  );
}
