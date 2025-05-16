import './Heading4.css';
import { HeadingProps } from '../shared/HeadingProps';
import '../shared/HeadingSizes.css';

export default function Heading4({ children, className = "", size = "sm", ...rest }: HeadingProps) {
  return (
    <h4 className={`heading4 heading-${size} ${className}`} {...rest}>
      {children}
    </h4>
  );
}
