import './Heading5.css';
import { HeadingProps } from '../shared/HeadingProps';
import '../shared/HeadingSizes.css';

export default function Heading5({ children, className = "", size = "sm", ...rest }: HeadingProps) {
  return (
    <h5 className={`heading5 heading-${size} ${className}`} {...rest}>
      {children}ault function Heading5({children}: Heading5Props)
    </h5>
  )
} 
