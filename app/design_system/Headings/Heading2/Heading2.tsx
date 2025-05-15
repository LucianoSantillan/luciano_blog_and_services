
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import './Heading2.css';

interface Heading2Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export default function Heading2({ children }: Heading2Props) {
  return <h2 className=''>{children}</h2>;
}
