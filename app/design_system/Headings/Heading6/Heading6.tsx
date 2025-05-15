import './Heading6.css';
import { HeadingProps } from '../shared/HeadingProps';
import '../shared/HeadingSizes.css';

export default function Heading6({ children, className = "", size = "xsm", ...rest }: HeadingProps) {
  return (
    <h6 className={`heading6 heading-${size} ${className}`} {...rest}>
      {children}
    </h6>
  );
}
